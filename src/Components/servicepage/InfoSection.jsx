// src/Components/InfoSection.jsx

import React from "react";

const InfoSection = ({
  title,
  description1,
  description2,
  description3,
  image,
  reverse,
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8 px-4 md:px-4 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-black underline underline-offset-4 mb-5">
          {title}
        </h2>

        <p className="text-lg md:text-lg text-black leading-relaxed mb-4">
          {description1}
        </p>

        {description2 && (
          <p className="text-lg md:text-lg text-black leading-relaxed mb-4">
            {description2}
          </p>
        )}

        {description3 && (
          <p className="text-lg md:text-lg text-black leading-relaxed">
            {description3}
          </p>
        )}
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full max-w-sm rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default InfoSection;