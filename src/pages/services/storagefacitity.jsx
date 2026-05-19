import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/storage-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import Footer from "../../Components/Footer";

import {
  storageFacilityServiceData,
  storageFacilityInfoData,
} from "../../data/storageFacilityData";

const StorageFacility = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Secure Storage Facility"
        description="Secure storage solutions for household goods, office equipment, and valuable belongings with complete safety and care."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > Storage Facility"
      />

      <ServiceSection
        title={storageFacilityServiceData.title}
        description={storageFacilityServiceData.description}
        description1={storageFacilityServiceData.description1}
        descriptionClass="whitespace-pre-line leading-[32px]"
        services={storageFacilityServiceData.services}
        emotionalValue={storageFacilityServiceData.emotionalValue}
        emotionalValue1={storageFacilityServiceData.emotionalValue1}
        handlingPrecautions={storageFacilityServiceData.handlingPrecautions}
        handlingPrecautions2={storageFacilityServiceData.handlingPrecautions2}
        storageFacilities={storageFacilityServiceData.storageFacilities}
      />

      {storageFacilityInfoData.map((item) => (
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

export default StorageFacility;