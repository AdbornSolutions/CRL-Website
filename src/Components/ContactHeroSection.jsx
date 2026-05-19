import React from "react";
import heroImage from "../assets/images/contact-bg.png";

const ContactHeroSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[420px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Contact Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-xl text-white">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Contact us
            </h1>

            <p className="text-sm md:text-lg leading-relaxed text-gray-100 max-w-md">
              Get in touch with our team for reliable support, quick
              assistance, and personalized logistics solutions.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactHeroSection;