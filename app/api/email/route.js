// app/api/email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  console.log("Email Route called");

  // Log environment variables for debugging
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

  const {
    fullName,
    email,
    phone,
    posPackage,
    subscriptionPlan,
    completePackage,
    addOnFeatures,
    message,
  } = await req.json();

  if (!fullName || !email || !phone || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Check if email credentials are configured
  const hasEmailUser = !!process.env.EMAIL_USER;
  const hasEmailPass = !!process.env.EMAIL_PASS;
  
  if (!hasEmailUser || !hasEmailPass) {
    console.error("Email credentials not configured");
    console.error("EMAIL_USER exists:", hasEmailUser);
    console.error("EMAIL_PASS exists:", hasEmailPass);
    console.error("All env vars:", Object.keys(process.env).filter(key => key.includes('EMAIL')));
    
    const missingVars = [];
    if (!hasEmailUser) missingVars.push("EMAIL_USER");
    if (!hasEmailPass) missingVars.push("EMAIL_PASS");
    
    return new Response(
      JSON.stringify({ 
        message: `Email service is not configured. Missing: ${missingVars.join(", ")}. Please create a .env.local file in the project root with EMAIL_USER and EMAIL_PASS variables.` 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: "tcdruberu@gmail.com",
      subject: `New POS System Inquiry from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        POS Package (Lifetime): ${posPackage || 'Not selected'}
        Subscription Plan: ${subscriptionPlan || 'Not selected'}
        Hardware Bundle: ${completePackage || 'Not selected'}
        Standalone Equipment: ${addOnFeatures || 'None'}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc;">New POS System Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
          <p><strong>Selected Configuration:</strong></p>
          <p><strong>POS Package (Lifetime):</strong> ${posPackage || 'Not selected'}</p>
          <p><strong>Subscription Plan:</strong> ${subscriptionPlan || 'Not selected'}</p>
          <p><strong>Hardware Bundle:</strong> ${completePackage || 'Not selected'}</p>
          <p><strong>Standalone Equipment:</strong> ${addOnFeatures || 'None'}</p>
          <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
          <p><strong>Additional Message/Requirements:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error.message || "Failed to send email. Please check your email configuration.";
    return new Response(
      JSON.stringify({ 
        message: errorMessage,
        error: error.toString() 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}