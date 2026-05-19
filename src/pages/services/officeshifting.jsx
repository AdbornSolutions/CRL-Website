// src/Page/Services/officeshifting.jsx

import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/office-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import Footer from "../../Components/Footer";

import {
  officeServiceData,
  officeInfoData,
} from "../../data/officeData";

const OfficeShifting = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Secure Office Shifting"
        description="Professional office relocation services with secure packing, careful handling, and timely transportation for smooth business movement."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > Office Shifting"
      />

      <ServiceSection
  title={officeServiceData.title}
  description={officeServiceData.description}
  description1={officeServiceData.description1}
  descriptionClass="whitespace-pre-line leading-[32px]"
  services={officeServiceData.services}
  emotionalValue={officeServiceData.emotionalValue}
  emotionalValue1={officeServiceData.emotionalValue1 || undefined}
  handlingPrecautions={officeServiceData.handlingPrecautions}
  handlingPrecautions2={officeServiceData.handlingPrecautions2 || undefined}
  storageFacilities={officeServiceData.storageFacilities}
/>

      {officeInfoData.map((item) => (
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

export default OfficeShifting;