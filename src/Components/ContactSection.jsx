import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Thanks! This is a static demo form, so no message was sent.");
    setFormData({ fullName: "", email: "", mobile: "", message: "" });
  };

  return (
    <section className="w-full bg-white py-16 px-5 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-black mb-3">Get in Touch</p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6 text-black">
            We are Always ready to <br />
            help you and answer <br />
            your questions
          </h2>

          <p className="text-black text-base mb-10 max-w-lg">
            “Our dedicated support team is available to guide you, provide
            solutions, and ensure a smooth experience.”
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">
            <div>
              <h4 className="text-xl font-semibold underline mb-1">
                Call Center
              </h4>
              <p>+91 74993 58403</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold underline mb-1">
                Our Location
              </h4>
              <p>
               

C/O Babarao Chaple Miniwada (Kondhali) <br />Tahsil – Katol District – Nagpur – 441103 <br /> Maharashtra (MH)
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold underline mb-1">
                Email
              </h4>
              <p>chapleroadlines26@crl-transport.com</p>
            </div>

           <div>
  <h4 className="text-xl font-semibold underline mb-1">
    Social network
  </h4>

  <div className="flex gap-4 text-xl mt-2">
    
    {/* Instagram */}
    <a
      href="https://www.instagram.com/crl_packers_and_movers_nagpur_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-500 transition"
    >
      <i className="fab fa-instagram"></i>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/917499358403"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="hover:text-green-500 transition"
    >
      <i className="fab fa-whatsapp"></i>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61587466176300"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 transition"
    >
      <i className="fab fa-facebook-f"></i>
    </a>

  </div>
</div>
          </div>
        </div>

        <div className="bg-[#e8e8e8] rounded-[60px] p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
            Get in Touch
          </h3>

          <p className="text-sm text-black mb-8">
            “Connect with our team today for expert guidance, quick responses,
            and dependable logistics support.”
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email id"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile no."
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <button
              type="submit"
              className="bg-sky-400 hover:bg-sky-500 text-black font-bold px-8 py-3 rounded-full transition"
            >
              Submit
            </button>

            {success && (
              <p className="text-sm font-semibold text-black mt-3">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
