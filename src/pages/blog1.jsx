import React from "react";

import matterIcon from "../assets/icons/icon1.png";
import typesIcon from "../assets/icons/icon2.png";
import safetyIcon from "../assets/icons/icon3.png";
import loadingIcon from "../assets/icons/icon4.png";
import deliveryIcon from "../assets/icons/icon5.png";
import finalIcon from "../assets/icons/icon6.png";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Blog1 = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white px-4 md:px-10 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto">

          {/* Blog Header */}
          <div className="text-center border-b border-gray-400 pb-6 mt-5">
            <span className="inline-block bg-[#062a55] text-white text-sm px-6 py-2 rounded-full mb-8">
              Transport
            </span>

            <h1 className="text-3xl md:text-4xl font-semibold underline mb-4">
              Car and Bike Transportation Guide – Safe Moving Tips
            </h1>

            <p className="max-w-5xl mx-auto text-base md:text-lg text-black leading-snug">
              Relocating your car or bike requires careful planning and professional
              handling to ensure safe and damage-free delivery. Whether you’re moving
              locally or to another city, proper vehicle transportation plays a crucial
              role in a smooth relocation process. Here’s everything you need to know
              before transporting your vehicle.
            </p>
          </div>

          {/* Why Professional */}
          <div className="border-b border-dotted border-gray-400 py-10">
            <div className="flex items-start gap-4 md:pl-12">
              <img src={matterIcon} alt="Professional Transport" className="w-12 h-12 object-contain" />

              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">
                  Why Professional Vehicle Transportation Matters
                </h2>

                <p className="mx-auto text-base md:text-lg max-w-5xl">
                  Transporting vehicles without expert support can lead to scratches,
                  dents, or mechanical issues. Professional packers and movers use
                  specialized carriers, safety straps, and secure loading techniques
                  to prevent damage during transit.
                </p>
              </div>
            </div>
          </div>

          {/* Types */}
          <div className="border-b border-dotted border-gray-400 py-10">
            <div className="flex items-start gap-4 md:pl-12 mb-8">
              <img src={typesIcon} alt="Transport Types" className="w-12 h-12 object-contain" />

              <h2 className="text-xl font-semibold text-black pt-3">
                Types of Vehicle Transport Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:pl-48">
              <div>
                <h3 className="text-lg mb-3">1. Open Carrier Transport</h3>
                <ul className="list-disc pl-8 text-lg text-gray-800">
                  <li>Budget-friendly option</li>
                  <li>Suitable for short and medium distances</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-3">2. Enclosed Carrier Transport</h3>
                <ul className="list-disc pl-8 text-lg text-gray-800">
                  <li>Maximum protection</li>
                  <li>Ideal for luxury or high-value vehicles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="border-b border-dotted border-gray-400 py-10">
            <div className="flex items-center gap-4 mb-8 md:pl-12">
              <img src={safetyIcon} alt="Safety" className="w-12 h-12 object-contain" />

              <h2 className="text-2xl font-semibold text-black">
                Safety Tips Before Transport
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-8 md:pl-28">
              <div>
                <h3 className="text-lg font-semibold mb-4">✔ Clean Your Vehicle</h3>
                <p className="text-lg text-gray-800">
                  Washing your car or bike helps identify any existing scratches or dents before transport.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">✔ Remove Personal Belongings</h3>
                <p className="text-lg text-gray-800">
                  Empty the vehicle to prevent internal damage or loss.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">✔ Check Fuel Level</h3>
                <p className="text-lg text-gray-800">
                  Keep fuel at minimal level around 1/4 tank.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">✔ Disable Alarms</h3>
                <p className="text-lg text-gray-800">
                  Avoid unnecessary battery drain during transit.
                </p>
              </div>
            </div>
          </div>

          {/* Loading and Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-dotted border-gray-400 py-10">
            <div>
              <div className="flex items-center gap-4 mb-6 md:pl-12">
                <img src={loadingIcon} alt="Loading" className="w-12 h-12 object-contain" />

                <h2 className="text-2xl font-semibold text-black">
                  Proper Loading & Securing Process
                </h2>
              </div>

              <div className="md:pl-32">
                <h3 className="text-lg mb-5">Professional movers:</h3>

                <ul className="list-disc pl-5 text-lg text-gray-800 space-y-1">
                  <li>Use hydraulic lifts for safe loading</li>
                  <li>Secure vehicles with heavy-duty straps</li>
                  <li>Add protective covers for scratch prevention</li>
                  <li>Ensure balanced placement inside carriers</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={deliveryIcon} alt="Delivery" className="w-12 h-12 object-contain" />

                <h2 className="text-2xl font-semibold text-black">
                  Delivery & Inspection
                </h2>
              </div>

              <div className="md:pl-20">
                <h3 className="text-lg mb-5">Upon delivery:</h3>

                <ul className="list-disc pl-5 text-lg text-gray-800 space-y-1">
                  <li>Inspect the vehicle carefully</li>
                  <li>Compare with pre-transport condition</li>
                  <li>Confirm documentation before final sign-off</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="border-b border-dotted border-gray-400 py-10">
            <div className="flex items-center gap-4 mb-6 md:pl-12">
              <img src={finalIcon} alt="Final Thoughts" className="w-12 h-12 object-contain" />

              <h2 className="text-2xl font-semibold text-black">
                Final Thoughts
              </h2>
            </div>

            <p className="text-lg text-gray-800 md:pl-32 leading-relaxed max-w-6xl">
              Choosing the right packers and movers for vehicle transportation ensures
              peace of mind. With professional handling, secure loading, and timely
              delivery, your car or bike reaches its destination safely and without hassle.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog1;