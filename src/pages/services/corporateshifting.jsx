import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/corporate-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import Footer from "../../Components/Footer";

import {
  corporateShiftingServiceData,
  corporateShiftingInfoData,
} from "../../data/corporateShiftingData";

const CorporateShifting = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Secure Corporate Shifting"
        description="Professional corporate relocation services with secure packing, organized handling, and timely delivery for smooth business movement."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > Corporate Shifting"
      />

      <ServiceSection
        title={corporateShiftingServiceData.title}
        description={corporateShiftingServiceData.description}
        description1={corporateShiftingServiceData.description1}
        descriptionClass="whitespace-pre-line leading-[32px]"
        services={corporateShiftingServiceData.services}
        emotionalValue={corporateShiftingServiceData.emotionalValue}
        emotionalValue1={corporateShiftingServiceData.emotionalValue1}
        handlingPrecautions={corporateShiftingServiceData.handlingPrecautions}
        handlingPrecautions2={corporateShiftingServiceData.handlingPrecautions2}
        storageFacilities={corporateShiftingServiceData.storageFacilities}
      />

      {corporateShiftingInfoData.map((item) => (
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

export default CorporateShifting;