import React from "react";
import heroBg from "../../assets/homepage/hero-bg.png";
import './Home.css';  // Import the CSS file from the same directory

const HeroHomeSection = () => {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden px-4"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001428]/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[720px] text-center text-white mt-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-7 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm text-lg font-medium">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          CRL packers and movers
          <span className="w-3 h-3 bg-white rounded-full"></span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-5xl sm:text-[36px] md:text-[42px] lg:text-[46px] font-bold leading-tight tracking-wide mb-4">
          Welcome To Logisco Cargo <br className="hidden sm:block" />
          Transport Services
        </h1>

        {/* Paragraph */}
        <p className="max-w-[520px] mx-auto text-xs sm:text-sm md:text-[16px] leading-relaxed text-white/90 mb-6 font-body ">
          Take your business to the next level with our efficient transportation
          management tools. Logisco will open a new horizon for us.
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#ff9900] hover:bg-[#e88700] text-white px-5 py-2.5 rounded-xl text-md font-semibold transition-all duration-300 hover:-translate-y-1"
        >
          Get in touch
          <span className="bg-white text-[#ff9900] w-5 h-5 rounded-md flex items-center justify-center text-xs">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroHomeSection;