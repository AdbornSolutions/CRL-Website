import React from "react";

const HeroSection = ({ title, description, buttonText, buttonLink, imageSrc, badgeText }) => {
  return (
    <section
      className="relative w-full h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }} // Using the imported image here
    >
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/0 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 py-40 flex flex-col justify-center items-start text-white">
        {/* Service Page Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 mb-7 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm text-sm font-medium">
          <span className="w-2 h-2 bg-white rounded-full"></span>
        {badgeText}
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-between w-full ">
          <div className="max-w-[600px]">
            <h1 className="text-3xl sm:text-5xl font-bold mt-3 mb-5">{title}</h1>
            <p className="text-lg sm:text-xl mt-4 max-w-[500px]">{description}</p>
            <a
              href={buttonLink}
              className="inline-flex items-center gap-2 bg-[#ff9900] hover:bg-[#e88700] text-white px-5 py-2.5 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1 mt-5"
            >
              {buttonText}
              <span className="bg-white text-[#ff9900] w-5 h-5 rounded-sm flex items-center justify-center text-xs">
            →
          </span>
            </a>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;