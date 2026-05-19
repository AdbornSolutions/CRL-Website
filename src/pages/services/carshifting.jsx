import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/car-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import Footer from "../../Components/Footer";

import {
  carShiftingServiceData,
  carShiftingInfoData,
} from "../../data/carShiftingData";

const CarShifting = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Secure Car Shifting"
        description="Professional car transportation services with careful handling, secure loading, and reliable delivery across cities."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > Car Shifting"
      />

      <ServiceSection
        title={carShiftingServiceData.title}
        description={carShiftingServiceData.description}
        description1={carShiftingServiceData.description1}
        descriptionClass="whitespace-pre-line leading-[32px]"
        services={carShiftingServiceData.services}
        emotionalValue={carShiftingServiceData.emotionalValue}
        emotionalValue1={carShiftingServiceData.emotionalValue1}
        handlingPrecautions={carShiftingServiceData.handlingPrecautions}
        handlingPrecautions2={carShiftingServiceData.handlingPrecautions2}
        storageFacilities={carShiftingServiceData.storageFacilities}
      />

      {carShiftingInfoData.map((item) => (
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

export default CarShifting;