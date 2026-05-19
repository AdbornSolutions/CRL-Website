import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/household-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import Footer from "../../Components/Footer";

import {
  householdServiceData,
  householdInfoData,
} from "../../data/householdData";

const Household = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Secure Household Shifting"
        description="Professional packing and careful transportation ensuring your household belongings reach safely and on time."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > Household Shifting"
      />

      <ServiceSection
        title={householdServiceData.title}
        description={householdServiceData.description}
        description1={householdServiceData.description1}
        descriptionClass="whitespace-pre-line leading-[32px]"
        services={householdServiceData.services}
        emotionalValue={householdServiceData.emotionalValue}
        emotionalValue1={householdServiceData.emotionalValue1}
        handlingPrecautions={householdServiceData.handlingPrecautions}
        handlingPrecautions2={householdServiceData.handlingPrecautions2}
        storageFacilities={householdServiceData.storageFacilities}
      />

      {householdInfoData.map((item) => (
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

export default Household;