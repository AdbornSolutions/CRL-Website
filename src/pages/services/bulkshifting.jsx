import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/bulk-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import Footer from "../../Components/Footer";

import {
  bulkShiftingServiceData,
  bulkShiftingInfoData,
} from "../../data/bulkShiftingData";

const BulkShifting = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Secure Bulk Shifting"
        description="Professional bulk shifting services with secure packing, careful loading, and reliable transportation for large-scale movement."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > Bulk Shifting"
      />

      <ServiceSection
        title={bulkShiftingServiceData.title}
        description={bulkShiftingServiceData.description}
        description1={bulkShiftingServiceData.description1}
        descriptionClass="whitespace-pre-line leading-[32px]"
        services={bulkShiftingServiceData.services}
        emotionalValue={bulkShiftingServiceData.emotionalValue}
        emotionalValue1={bulkShiftingServiceData.emotionalValue1}
        handlingPrecautions={bulkShiftingServiceData.handlingPrecautions}
        handlingPrecautions2={bulkShiftingServiceData.handlingPrecautions2}
        storageFacilities={bulkShiftingServiceData.storageFacilities}
      />

      {bulkShiftingInfoData.map((item) => (
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

export default BulkShifting;