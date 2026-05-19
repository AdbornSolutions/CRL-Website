// src/Page/Services/InternationalShifting.jsx

import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/international-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import Footer from "../../Components/Footer";

import {
  internationalServiceData,
  internationalInfoData,
} from "../../data/internationalData";

const InternationalShifting = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Secure International Shifting"
        description="Professional international relocation services with secure packing, careful handling, and reliable transportation across countries."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > International Shifting"
      />

      <ServiceSection
        title={internationalServiceData.title}
        description={internationalServiceData.description}
        description1={internationalServiceData.description1}
        descriptionClass="whitespace-pre-line leading-[32px]"
        services={internationalServiceData.services}
        emotionalValue={internationalServiceData.emotionalValue}
        emotionalValue1={internationalServiceData.emotionalValue1}
        handlingPrecautions={internationalServiceData.handlingPrecautions}
        handlingPrecautions2={internationalServiceData.handlingPrecautions2}
        storageFacilities={internationalServiceData.storageFacilities}
      />

      {internationalInfoData.map((item) => (
        <InfoSection
          key={item.id}
          title={item.title}
          description1={item.description1}
          description2={item.description2}
          description3={item.description3}
          image={item.image}
          reverse={item.reverse}
        />
      ))}

      <div className="flex justify-center gap-4 mt-6 mb-10">
        <a href="/contact"><button className="bg-[#06213d] text-white text-lg px-8 py-3 rounded-3xl hover:bg-[#0b345f] transition">
          Enroll Now
        </button></a>

        <a href="/contact"><button className="bg-orange-500 text-white text-lg px-5 py-3 rounded-3xl hover:bg-orange-600 transition">
          Get in touch ✓
        </button></a>
      </div>

      <Footer />
    </>
  );
};

export default InternationalShifting;