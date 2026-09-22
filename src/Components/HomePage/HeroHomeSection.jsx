// eslint-disable-next-line no-unused-vars
import React from "react";
import heroBg from "../../assets/homepage/hero-bg.png";
import './Home.css';  // Import the CSS file from the same directory

const HeroHomeSection = () => {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-start overflow-hidden px-6 sm:px-10 lg:px-[8%]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001428]/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[760px] text-left text-white mt-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-7 py-3.5 mb-7 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm text-xl font-medium">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          Chaple Roadlines Pvt Ltd.
          <span className="w-3 h-3 bg-white rounded-full"></span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-[42px] sm:text-5xl md:text-[54px] lg:text-6xl font-bold leading-tight tracking-wide mb-5">
          Welcome to CRL  <br className="hidden sm:block" />
          Your Reliable <br className="hidden sm:block" />Logistics Partner
        </h1>

        {/* Paragraph */}
        <p className="max-w-[580px] text-base sm:text-lg leading-relaxed text-white mb-7 font-body">
          Take your business to the next level with our efficient transportation
          management tools. CRL will open a new horizon for us.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ff9900] hover:bg-[#e88700] text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            Get in touch
            <span className="bg-white text-[#ff9900] w-5 h-5 rounded-md flex items-center justify-center text-xs">
              →
            </span>
          </a>
          <a
            href="/track"
            className="inline-flex items-center gap-2 border border-white bg-white/10 hover:bg-white hover:text-[#002f6c] text-white px-6 py-3 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            Track Shipment
            <span className="w-5 h-5 rounded-md flex items-center justify-center text-base">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeSection;
