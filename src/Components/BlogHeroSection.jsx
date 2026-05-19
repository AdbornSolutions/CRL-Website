import React from "react";
import blogHeroImg from "../assets/blog/blog-bg.png"; // change path as needed

const BlogHeroSection = () => {
  return (
    <section className="w-full   py-6">
      <div
        className="relative w-full min-h-[100vh] md:min-h-[90vh] rounded-none overflow-hidden bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${blogHeroImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

   
        <div className="relative z-10 w-full px-5 md:px-10 pb-8 md:pb-12 text-white">
             <h1 className="text-2xl md:text-5xl font-semibold leading-tight max-w-4xl">
            How to Plan a Stress-Free House Move
          </h1>
          <p className="text-lg md:text-lg  mt-5 text-white/90">
           Smart planning, organized packing, and professional support can turn your <br /> relocation into a smooth and worry-free experience.
          </p>

         

          {/* Bottom line + arrow */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex-1  border-white/70"></div>

            <button className="w-12 h-12 md:w-14 md:h-14 rounded-full   flex items-center justify-center hover:bg-white hover:text-black transition">
              <span className="text-6xl leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;