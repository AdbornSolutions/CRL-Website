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
          
          <div className="max-w-xl text-white">

            {/* Breadcrumb */}
             <div className="inline-flex items-center gap-3 px-5 py-2 mb-7 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm text-sm font-medium">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Project page
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-5">
              Move Smarter <br />
              with CRL
            </h1>

            {/* Description */}
            <p className="text-sm md:text-lg text-gray-200 leading-relaxed mb-8 max-w-md">
              End-to-end transport and moving services tailored to boost
              business and personal deliveries.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">

              {/* Orange Button */}
              <a href="/contact">
                <button className="bg-orange-500 hover:bg-orange-600 transition-all px-6 py-3 rounded-md text-white font-semibold text-sm md:text-base">
                  Get in touch
                </button>
              </a>

              {/* White Button */}
              <a href="/projects">
                <button className="bg-white hover:bg-gray-100 transition-all px-6 py-3 rounded-md text-black font-semibold text-sm md:text-base flex items-center gap-2">
                  Book Now
                  
                  <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center text-xs">
                    ↗
                  </span>
                </button>
              </a>

            </div>

          </div>
        </div>
      </div>


    </section>
  );
};

export default ProjectHeroBg;