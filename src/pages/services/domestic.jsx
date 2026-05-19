import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import heroImage from "../../assets/servicepage/domestic-bg.png";
import ServiceSection from "../../Components/servicepage/ServiceSection";
import InfoSection from "../../Components/servicepage/InfoSection";
import img1 from "../../assets/servicepage/d1.png";
import img2 from "../../assets/servicepage/d2.png";
import { infoSectionData } from "../../data/infoSectionData";
import Footer from "../../Components/Footer"

import {
  services,
  emotionalValue,
  emotionalValue1,
  handlingPrecautions,
   handlingPrecautions2,
  storageFacilities,
} from "../../data/domesticData";

const Domestic = () => {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Safe and Reliable Domestic Shifting"
        description="Professional packing and secure transportation ensuring smooth relocation across cities with complete safety."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page > Domestic Shifting"
      />

      <ServiceSection
        title="CRL Packers and Movers – Domestic Shifting Services"
        description={`CRL Packers and Movers has designed reliable and well-planned domestic relocation solutions to safely move your household goods and vehicles anywhere across the country. Our services are carefully structured to deliver maximum customer satisfaction while exceeding expectations at every stage of the moving process.`}

description1={`As a trusted name in the packing and moving industry, CRL Packers and Movers is known for providing efficient, secure, and professionally managed domestic shifting services. We ensure that no deviation affects the quality and safety of your move. However, in the rare event of unforeseen circumstances, we take full responsibility and ensure fair resolution for any loss incurred.`}
        
        descriptionClass="whitespace-pre-line leading-[32px]"

        services={services}
        emotionalValue={emotionalValue}
        emotionalValue1={emotionalValue1}
        handlingPrecautions={handlingPrecautions}
         handlingPrecautions2={handlingPrecautions2}
        storageFacilities={storageFacilities}
      />
        {infoSectionData.map((item) => (
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

      <Footer/>
    </>
  );
};

export default Domestic;