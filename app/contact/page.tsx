'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    posPackage: "",
    completePackage: "",
    addOnFeatures: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus(""); // Clear any previous status messages

    try {
      setLoading(true);
      console.log("Form Data Being Sent:", formData); // Debugging line
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        const text = await response.text();
        console.error("Failed to parse JSON response:", text);
        setStatus("An error occurred. Please try again or contact us directly.");
        toast.error("An error occurred. Please try again or contact us directly.");
        return;
      }
      
      if (response.ok) {
        toast.success("We'll contact you within 24 hours. Thank you!");
        console.log(data.message);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          posPackage: "",
          completePackage: "",
          addOnFeatures: "",
          message: "",
        });
      } else {
        const errorMessage = data?.message || "An error occurred. Please try again.";
        setStatus(errorMessage);
        toast.error(errorMessage);
        console.error("Error response:", data);
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again."); // Show error toast
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl text-blue-100">
            Get in touch with us to discuss your POS system needs. We'll help you choose the perfect package for your business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-professional p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Request a Quote</h2>
            <div className="font-[sans-serif]">
              <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 outline-none bg-white placeholder-gray-400 text-gray-900 transition-all"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 outline-none bg-white placeholder-gray-400 text-gray-900 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 outline-none bg-white placeholder-gray-400 text-gray-900 transition-all"
                  />
                  <select
                    name="posPackage"
                    value={formData.posPackage}
                    onChange={handleChange}
                    className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 outline-none bg-white text-gray-900 transition-all"
                  >
                    <option value="">
                      Select POS Package (Optional)
                    </option>
                    <option value="Desktop Core - LKR 25,000">Desktop Core - LKR 25,000</option>
                    <option value="Hybrid Professional - LKR 45,000">Hybrid Professional - LKR 45,000 (Recommended)</option>
                    <option value="Enterprise Cloud - LKR 85,000">Enterprise Cloud - LKR 85,000</option>
                    <option value="Restaurant Elite - LKR 55,000">Restaurant Elite - LKR 55,000</option>
                  </select>
                  <select
                    name="completePackage"
                    value={formData.completePackage}
                    onChange={handleChange}
                    className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 outline-none bg-white text-gray-900 transition-all"
                  >
                    <option value="">
                      Select Complete Package with Hardware (Optional)
                    </option>
                    <option value="Package A - LKR 111,000">Package A - LKR 111,000 (Complete Basic Setup)</option>
                    <option value="Package B - LKR 156,000">Package B - LKR 156,000 (Complete Standard Setup)</option>
                    <option value="Package C - LKR 186,000">Package C - LKR 186,000 (Complete Professional Setup)</option>
                    <option value="Package D - LKR 286,000">Package D - LKR 286,000 (Complete Premium Setup)</option>
                  </select>
                  <textarea
                    name="addOnFeatures"
                    value={formData.addOnFeatures}
                    onChange={handleChange}
                    placeholder="Add-On Features (Optional - e.g., Barcode Scanner, SMS Module, Customer Display, etc.)"
                    rows={3}
                    className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 outline-none bg-white placeholder-gray-400 text-gray-900 transition-all resize-none"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your business needs and requirements"
                    rows={4}
                    required
                    className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 outline-none bg-white placeholder-gray-400 text-gray-900 transition-all resize-none"
                  />
                </div>

                {status && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    status.includes("Thank you") || status.includes("contact you")
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}>
                    <p className="text-sm font-medium">{status}</p>
                  </div>
                )}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-8 py-4 text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-0.5 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-corporate-blue hover:bg-corporate-blue-dark"
                    }`}
                  >
                    {loading ? "Sending..." : "Request Quote"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <div className="bg-white p-8 rounded-xl shadow-professional">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-corporate-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+94781508252" className="text-gray-600 hover:text-corporate-blue transition-colors">
                      + (94) 78 150 82 52
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-corporate-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Wewala, piliyandala <br />
                      Colombo
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Clock className="h-6 w-6 text-corporate-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="w-full mt-12">
          <div className="w-full h-0 pb-[30.25%] relative rounded-xl overflow-hidden shadow-professional-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.40207872737!2d79.89510966767261!3d6.789603611051199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f91d281cc5d%3A0xea4b2fcd3ce0e74e!2sPiliyandala!5e0!3m2!1sen!2slk!4v1743535860454!5m2!1sen!2slk"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

      </div>

    </div>
  );
} 