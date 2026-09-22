/* eslint-disable no-unused-vars */
import React from "react";
import heroBg from "../assets/images/project-bg.png";

const ProjectHeroBg = () => {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Project Hero"
        className="w-full h-[480px] md:h-[690px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-5 md:px-12">
          
          <div className="ml-auto max-w-xl text-white">

            {/* Breadcrumb */}
             <div className="inline-flex items-center gap-3 px-5 py-2 mb-7 rounded-full border border-black/70 bg-white/10 backdrop-blur-sm text-black text-sm font-medium">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          Project page
          <span className="w-2 h-2 bg-black rounded-full"></span>
        </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl text-black font-bold leading-tight mb-5">
              Move Smarter <br />
              with CRL
            </h1>

            {/* Description */}
            <p className="text-sm font-bold md:text-lg text-black leading-relaxed mb-8 max-w-md">
              End-to-end transport and moving services tailored to boost
              business and personal deliveries.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">

              {/* Orange Button */}
              <a href="/contact">
                <button className="bg-orange-500 hover:bg-orange-600 transition-all px-6 py-3 rounded-md text-black font-semibold text-sm md:text-base">
                  Get in touch
                </button>
              </a>
               <a
            href="/track"
            className="inline-flex items-center gap-2 border border-black bg-white/10 hover:bg-white hover:text-[#002f6c] text-black px-6 py-3 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            Track Shipment
            <span className="w-5 h-5 rounded-md flex items-center justify-center text-base">
              →
            </span>
          </a>
             

            </div>

          </div>
        </div>
      </div>


    </section>
  );
};

export default ProjectHeroBg;
