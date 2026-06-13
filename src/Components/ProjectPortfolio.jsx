import React, { useState } from "react";

// CARD IMAGES
import residentialImg from "../assets/project/c1.png";
import officeImg from "../assets/project/c2.png";
import vehicleImg from "../assets/project/c3.png";
import warehouseImg from "../assets/project/c4.png";

// POPUP SLIDER IMAGES
import residential1 from "../assets/project/p1.png";
import residential2 from "../assets/project/p2.png";
import residential3 from "../assets/project/p3.png";

import office1 from "../assets/project/office-1.png";
import office2 from "../assets/project/office-2.png";
import office3 from "../assets/project/office-3.png";

import vehicle1 from "../assets/project/vehicle-1.png";
import vehicle2 from "../assets/project/vehicle-2.png";
import vehicle3 from "../assets/project/vehicle-3.png";

import warehouse1 from "../assets/project/warehouse-1.png";
import warehouse2 from "../assets/project/warehouse-2.png";
import warehouse3 from "../assets/project/warehouse-3.png";

// ICONS
import packingIcon from "../assets/project/packing.png";
import transportIcon from "../assets/project/transport.png";

const projectData = [
  {
    id: 1,
    category: "Residential",
    title: "3BHK House Relocation – Mumbai to Pune",
    description:
      "Successfully relocated a family of four from Mumbai to Pune with all household items including furniture, electronics, and delicate crockery.",
    image: residentialImg,
    sliderImages: [residential1, residential2, residential3],
    time: "24 hours",
  },
  {
    id: 2,
    category: "Office Shifting",
    title: "Corporate Office Relocation – Bangalore",
    description:
      "Relocated an entire IT company office with 100+ workstations, servers, and networking equipment without any business disruption.",
    image: officeImg,
    sliderImages: [office1, office2, office3],
    time: "48 hours",
  },
  {
    id: 3,
    category: "Vehicle Transport",
    title: "Luxury Car Transportation – Delhi to Mumbai",
    description:
      "Transported a luxury sedan and SUV from Delhi to Mumbai using specialized car carriers with complete insurance coverage.",
    image: vehicleImg,
    sliderImages: [vehicle1, vehicle2, vehicle3],
    time: "36 hours",
  },
  {
    id: 4,
    category: "Bulk Shifting",
    title: "Warehouse Bulk Shifting – Chennai",
    description:
      "Shifted 500+ pallets of inventory from an old warehouse to a new facility with complete inventory management.",
    image: warehouseImg,
    sliderImages: [warehouse1, warehouse2, warehouse3],
    time: "72 hours",
  },
  {
    id: 5,
    category: "Residential",
    title: "3BHK House Relocation – Mumbai to Pune",
    description:
      "Successfully relocated a family of four from Mumbai to Pune with all household items including furniture, electronics, and delicate crockery.",
    image: residentialImg,
    sliderImages: [residential1, residential2, residential3],
    time: "24 hours",
  },
  {
    id: 6,
    category: "Office Shifting",
    title: "Corporate Office Relocation – Bangalore",
    description:
      "Relocated an entire IT company office with 100+ workstations, servers, and networking equipment without any business disruption.",
    image: officeImg,
    sliderImages: [office1, office2, office3],
    time: "48 hours",
  },
  {
    id: 7,
    category: "Vehicle Transport",
    title: "Luxury Car Transportation – Delhi to Mumbai",
    description:
      "Transported a luxury sedan and SUV from Delhi to Mumbai using specialized car carriers with complete insurance coverage.",
    image: vehicleImg,
    sliderImages: [vehicle1, vehicle2, vehicle3],
    time: "36 hours",
  },
  {
    id: 8,
    category: "Bulk Shifting",
    title: "Warehouse Bulk Shifting – Chennai",
    description:
      "Shifted 500+ pallets of inventory from an old warehouse to a new facility with complete inventory management.",
    image: warehouseImg,
    sliderImages: [warehouse1, warehouse2, warehouse3],
    time: "72 hours",
  },
];

const challenges = [
  "Heavy furniture items requiring disassembly",
  "Fragile antique items needing special care",
  "Tight timeline of 24 hours",
  "Long-distance transportation",
];
const testimonials = [
  {
    id: 1,
    text: "CRL Packers and Movers made our home shifting completely stress-free. Every item, from fragile glassware to heavy furniture, was packed carefully and delivered safely.",
    name: "Priya Mehta",
    role: "First-Time Homebuyers",
    rating: "★★★★★",
  },
  {
    id: 2,
    text: "Excellent office relocation service. The team handled our systems, furniture, and documents very professionally without causing any delay or damage.",
    name: "Rahul Sharma",
    role: "Business Owner",
    rating: "★★★★★",
  },
];

const ProjectPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === selectedProject.sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? selectedProject.sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="w-full  py-14 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-5">
            <div className="bg-white border border-gray-300 shadow-md rounded-full px-5 py-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Project Portfolio
              </span>
            </div>
          </div>

          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              Our Project Portfolio
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Explore our completed projects and see the quality of service we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-52 lg:h-44 xl:h-48 object-cover"
                  />

                  <span className="absolute bottom-3 left-3 bg-[#0b2347] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-bold text-black leading-snug mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gray-500 text-xs whitespace-nowrap">
                      ◷ {project.time}
                    </span>

                    <button
                      onClick={() => openModal(project)}
                      className="text-black font-semibold text-xs sm:text-sm whitespace-nowrap"
                    >
                      View Detail →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[9999] bg-black/75 flex items-center justify-center px-2 sm:px-4 py-3">
          <div className="relative bg-[#f4f4f4] w-full max-w-[960px] max-h-[94vh] overflow-y-auto rounded-[24px] p-4 sm:p-5 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0b2347] text-white text-xl font-bold flex items-center justify-center z-30"
            >
              ×
            </button>

            <span className="bg-[#0b2347] text-white text-[10px] px-3 py-1 rounded-full">
              {selectedProject.category}
            </span>

            <h2 className="text-xl sm:text-3xl font-bold text-black mt-3">
              {selectedProject.title}
            </h2>

            <div className="flex items-center gap-1 text-[14px] text-gray-500 mt-1">
              <span>◷</span>
              <span>Completed in {selectedProject.time}</span>
            </div>

            <div className="w-full h-[3px] bg-black mt-4 mb-5"></div>

            <div className="relative px-5 sm:px-8">
              <img
                src={selectedProject.sliderImages[activeImage]}
                alt={selectedProject.title}
                className="w-full h-[190px] sm:h-[280px] object-cover rounded-[28px]"
              />

              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-[#0b2347] text-white rounded-full flex items-center justify-center text-3xl font-bold"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-[#0b2347] text-white rounded-full flex items-center justify-center text-3xl font-bold"
              >
                ›
              </button>
            </div>

            <div className="flex gap-2 mt-3 ml-7 sm:ml-10">
              {selectedProject.sliderImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-14 h-12 sm:w-16 sm:h-14 rounded-xl overflow-hidden border-2 ${
                    activeImage === index
                      ? "border-[#0b2347]"
                      : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

           <div className="mt-5">
  <h3 className="text-2xl font-bold text-black mb-2">
    Project Overview
  </h3>
  <p className="text-[14px] sm:text-[16px] text-gray-700 leading-relaxed max-w-[640px]">
    {selectedProject.description}
  </p>
</div>

<div className="mt-4">
  <h3 className="text-xl font-bold text-black mb-3">
    Challenges Faced
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {challenges.map((item, index) => (
      <div
        key={index}
        className="bg-[#dddddd] rounded-lg px-5 py-5 flex items-center gap-2"
      >
        <span className="w-6 h-6 rounded-full bg-[#2f2a75] text-white flex items-center justify-center text-[13px]">
          ✓
        </span>
        <p className="text-[16px] text-black">{item}</p>
      </div>
    ))}
  </div>
</div>

<div className="w-full h-[3px] bg-black mt-5 mb-5"></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div className="bg-[#dddddd] rounded-xl p-6">
    <div className="flex items-center gap-4">
      <img
        src={packingIcon}
        alt=""
        className=""
      />
      <h4 className="font-bold text-xl">Packing Methods</h4>
    </div>
    <p className="text-[16px] text-black ">
      Professional bubble wrap, corrugated sheets, wooden crating for fragile items
    </p>
  </div>

  <div className="bg-[#dddddd] rounded-xl p-2">
    <div className="flex items-center gap-4">
      <img
        src={transportIcon}
        alt=""
        className=""
      />
      <h4 className="font-bold text-xl">Transportation</h4>
    </div>
    <p className="text-[16px] text-black ">
      Dedicated closed container truck
    </p>
  </div>

  <div className="bg-[#dddddd] rounded-xl p-6 sm:col-span-2">
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-[#0b2347] text-white flex items-center justify-center text-2xl">
        ◷
      </span>
      <h4 className="font-bold text-xl">Timeline</h4>
    </div>
    <p className="text-[16px] text-black mt-4">
      Packing: 8 hours | Transit: 12 hours | Unpacking: 4 hours
    </p>
  </div>
</div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-300 shadow rounded-full px-5 py-3 text-[14px]">
                <span className="w-3 h-3 bg-black rounded-full"></span>
                Testimonials
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr] gap-4 mt-5">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    What our Clients say
                  </h3>
                  <p className="text-sm text-black leading-relaxed">
                    At CRL, we're all about giving you smooth real estate
                    solutions that fit your needs, making sure you have a great
                    experience every step of the way.
                  </p>
                </div>

               {testimonials.map((testimonial) => (
  <div
    key={testimonial.id}
    className="bg-white border border-gray-300 rounded-2xl p-5 min-h-[180px]"
  >
    <p className="text-sm text-black leading-relaxed">
      {testimonial.text}
    </p>

    <h4 className="font-bold text-sm mt-4">
      {testimonial.name}
    </h4>

    <p className="font-semibold text-xs">
      {testimonial.role}
    </p>

    <p className="text-yellow-500 text-sm mt-1">
      {testimonial.rating}
    </p>
  </div>
))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPortfolio;