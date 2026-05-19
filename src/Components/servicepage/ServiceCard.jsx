import React from "react";

import img1 from "../../assets/servicepage/img1.png";
import img2 from "../../assets/servicepage/img2.png";
import img3 from "../../assets/servicepage/img3.png";
import img4 from "../../assets/servicepage/img4.png";
import img5 from "../../assets/servicepage/img5.png";
import img6 from "../../assets/servicepage/img6.png";
import img7 from "../../assets/servicepage/img7.png";
import img8 from "../../assets/servicepage/img8.png";
import bus from "../../assets/servicepage/bus.png";

const services = [
  {
    imageSrc: img1,
    title: "Domestic Shifting",
    description:
      "Safe and hassle-free domestic shifting services ensuring careful packing, smooth transportation, and timely delivery nationwide.",
    buttonLink: "/services/domestic",
  },
  {
    imageSrc: img2,
    title: "Household Shifting",
    description:
      "Safe, reliable household shifting service ensuring careful packing, smooth transportation, and on-time delivery.",
    buttonLink: "/services/household",
  },
  {
    imageSrc: img3,
    title: "Office Shifting",
    description:
      "Professional office shifting services ensuring safe relocation of equipment, minimal downtime, and smooth transition.",
    buttonLink: "/services/office",
  },
  {
    imageSrc: img4,
    title: "International Shifting",
    description:
      "Seamless international shifting services ensuring safe packing, smooth customs clearance, and timely delivery.",
    buttonLink: "/services/international",
  },
  {
    imageSrc: img5,
    title: "Storage Facility",
    description:
      "Secure, spacious, and well-managed storage facilities ensuring complete protection and easy access to your goods.",
    buttonLink: "/services/storage",
  },
  {
    imageSrc: img6,
    title: "Bulk Shifting",
    description:
      "Efficient bulk shifting solutions ensuring safe handling, timely transportation, and seamless relocation.",
    buttonLink: "/services/bulk",
  },
  {
    imageSrc: img7,
    title: "Car Shifting",
    description:
      "Safe and professional car shifting service ensuring damage-free transportation, timely delivery, and complete peace of mind.",
    buttonLink: "/services/car",
  },
  {
    imageSrc: img8,
    title: "Corporate Shifting",
    description:
      "Professional corporate shifting services ensuring secure, planned, and timely relocation with minimal business disruption.",
    buttonLink: "/services/corporate",
  },
];

const ServiceCard = ({ imageSrc, title, description, buttonLink }) => {
  return (
    <div className="relative h-[330px] sm:h-[350px] lg:h-[300px] group">
      {/* Image */}
      <div className="w-full h-full rounded-[18px] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* White Overlay Box */}
      <div className="absolute left-[-18px] bottom-[8px] w-[245px] min-h-[155px] bg-white shadow-lg px-[5px] pr-5 py-4">
        {/* Orange Icon - inside white box */}
        <div className="absolute left-0 top-0 w-[38px] h-[38px] bg-[#ff8a00] flex items-center justify-center">
         <img src={bus} alt="" srcset="" />
        </div>

        <h3 className="text-[19px] leading-[21px] px-[38px] font-bold text-black mb-3">
          {title}
        </h3>

        <p className="text-[14px] leading-[18px] text-black">
          {description}
        </p>

        {/* Arrow - inside white box */}
        <a
          href={buttonLink}
          className="absolute right-0 bottom-0 w-[42px] h-[42px] bg-[#ff8a00] flex items-center justify-center text-white text-[24px] hover:bg-[#e87900] transition"
        >
          →
        </a>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 px-6 overflow-hidden">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              buttonLink={service.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;