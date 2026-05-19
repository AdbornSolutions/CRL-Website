import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setSuccess(data.message || "Something went wrong");
      }
    } catch (error) {
      setSuccess("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full bg-white py-16 px-5 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-sm text-black mb-3">Get in Touch</p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-black">
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
              <p>xxxx-xxx-xxx</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold underline mb-1">
                Our Location
              </h4>
              <p>
                34A, sarwodya <br />
                nagar,khamla,nagpur
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold underline mb-1">
                Email
              </h4>
              <p>adbornsol@gmail.com</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold underline mb-1">
                Social network
              </h4>
              <div className="flex gap-3 text-xl">
                <span>●</span>
                <span>●</span>
                <span>●</span>
                <span>●</span>
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
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email id"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile no."
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl shadow-md outline-none text-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-sky-400 hover:bg-sky-500 text-black font-bold px-8 py-3 rounded-full transition"
            >
              {loading ? "Submitting..." : "Submit"}
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