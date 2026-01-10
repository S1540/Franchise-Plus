import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [uiMessage, setUiMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzfKJRHcFEploDA07E6ADBRlKdcgH0-PWvErBhfJEiOckbPNdpJf1UgtjwUsVgiLHGV/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (res.status === 200) {
        setUiMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
      } else {
        setUiMessage("Form submission failed.");
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };

  return (
    <section className="bg-linear-to-b from-gray-950 to-black py-20">
      <div className="max-w-4xl mx-auto px-6 text-white">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-3">
            Contact{" "}
            <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        {/* Form Card */}
        {uiMessage ? (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-md p-4 mb-6">
            <p>{uiMessage}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/60 backdrop-blur-md border border-amber-500/20 rounded-lg p-8 sm:p-10 space-y-6"
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
                />
              </div>
            </div>

            {/* Phone + City */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message / Note
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-lg bg-linear-to-r from-amber-600 to-amber-700 font-bold text-white hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-amber-900/70 cursor-pointer"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
