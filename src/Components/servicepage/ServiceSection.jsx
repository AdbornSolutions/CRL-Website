import React from "react";

// Template Component to render the Service Section
const ServiceSection = ({ 
  title, 
  description,
  description1, 
  services, // Array of services for the service list
  emotionalValue,
  emotionalValue1, 
  handlingPrecautions,
  handlingPrecautions2, 
  storageFacilities 
}) => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className=" mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 underline">{title}</h1>
        <p className="text-lg text-black">{description}</p>
        <p className="text-lg text-black">{description1}</p>
      </div>

      {/* Services List */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mb-12 ">
        {services.map((service, index) => (
          <div key={index} className="bg-white ">
            <h3 className="text-2xl font-semibold text-black mb-4 underline">{service.title}</h3>
            <ul className="list-disc pl-6 text-black">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Emotional Value Section */}
      <div className=" mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">{emotionalValue.title}</h2>
        <p className="text-lg text-black">{emotionalValue.description}</p>
        <p className="text-lg text-black">{emotionalValue1.description}</p>
      </div> 

      {/* Handling & Precautions Section */}
      <div className=" mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">{handlingPrecautions.title}</h2>
        <p className="text-lg text-black">{handlingPrecautions.description}</p>
         <p className="text-lg text-black">{handlingPrecautions2.description}</p>
      </div>

      {/* Storage Facilities Section */}
      <div className=" mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">{storageFacilities.title}</h2>
        <p className="text-lg text-black">{storageFacilities.description}</p>
      </div>
    </section>
  );
};

export default ServiceSection;