import React from 'react';
import aboutLogImage from '../../assets/homepage/about-log.png'; // Import the image

const AboutLogisco = () => {
  return (
    <section className="py-16 px-4 md:px-8 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section (Image) */}
        <div className="relative">
          <img
            src={aboutLogImage} // Replace with your actual image URL
            alt="Logisco Cargo"
            className="w-full h-auto  object-cover"
          />

          {/* 20+ Years of Experience (Positioned at the bottom right of the image) */}
          {/* <div className="absolute bottom-2 right-10 bg-[#0D2A4F] text-white py-3 px-6 rounded-xl flex items-center">
            <div className="flex items-center text-lg font-bold">
              <span className="text-3xl font-semibold">20+</span>
              <span className="ml-2">Years of Experience</span>
            </div>
          </div> */}
        </div>

        {/* Right Section (Text and Info) */}
        <div className="flex flex-col justify-center">
          {/* About Us Badge */}
          <div className="inline-flex items-center gap-3 bg-white py-3 px-8 rounded-full shadow-[inset_0_4px_10px_rgba(0,0,0,0.2),_0_4px_15px_rgba(0,0,0,0.25)] mb-5 max-w-max">
            <span className="w-4 h-4 bg-black rounded-full"></span> {/* Increased size of the black dot */}
            <span className="text-sm font-semibold text-black">About us</span>
          </div>

          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">About Logisco Cargo</h2>

          <p className="text-lg text-black mb-6">
           Logisco Cargo is a leading provider of innovative transportation and logistics solutions. With a focus on efficiency, reliability, and customer satisfaction, we offer seamless cargo transport services globally. Our cutting-edge technology and skilled team ensure your business operations run smoothly, empowering you to reach new heights in the logistics industry.
          </p>

          {/* Learn More Button */}
          <a
            href="#learn-more"
            className="text-md font-semibold text-black underline"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutLogisco;