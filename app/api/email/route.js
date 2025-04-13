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
    weddingDate,
    serviceType,
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

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: "tcdruberu@gmail.com",
      subject: `New Registration from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Event Date: ${weddingDate}
        Service Type: ${serviceType}
        Message: ${message}
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
    return new Response(
      JSON.stringify({ message: "Failed to send email", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}