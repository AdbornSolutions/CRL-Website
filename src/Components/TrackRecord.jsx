import React from "react";

import icon1 from "../assets/project/icon1.png";
import icon2 from "../assets/project/icon2.png";
import icon3 from "../assets/project/icon3.png";
import icon4 from "../assets/project/icon4.png";

const stats = [
  {
    number: "500+",
    label: "Projects Completed",
    icon: icon1,
  },
  {
    number: "10,000+",
    label: "Happy Customers",
    icon: icon2,
  },
  {
    number: "15+",
    label: "Cities Covered",
    icon: icon3,
  },
  {
    number: "100%",
    label: "Safe Delivery Rate",
    icon: icon4,
  },
];

const TrackRecord = () => {
  return (
    <section className="w-full bg-[#0b2b52] py-10 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-7">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            Our Track Record
          </h2>

          <p className="text-white/80 text-xs sm:text-sm mt-2">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md px-5 py-6 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#08264b] flex items-center justify-center mb-4">
                <img
                  src={item.icon}
                  alt=""
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-black">
                {item.number}
              </h3>

              <p className="text-sm text-black mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;