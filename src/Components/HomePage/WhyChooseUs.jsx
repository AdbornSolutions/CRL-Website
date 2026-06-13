import React from "react";

import mainImg from "../../assets/commonimages/Group 344.png";
import contactImg from "../../assets/commonimages/new.png";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-8 px-4 overflow-hidden">
      {/* DESKTOP DESIGN */}
      <div className="hidden lg:block relative max-w-[1200px] mx-auto h-[640px]">
        {/* Badge */}
        <div className="absolute left-[80px] top-[0px] z-30 inline-flex items-center gap-2 bg-white rounded-full px-8 py-4 shadow-[inset_0_2px_5px_rgba(0,0,0,0.16),_0_3px_8px_rgba(0,0,0,0.22)]">
          <span className="w-4 h-4 bg-black rounded-full"></span>
          <span className="text-[15px]  text-black">Choose us</span>
        </div>

        {/* Left heading */}
        <h2 className="absolute left-[80px] top-[65px] z-30 text-[28px] leading-[34px] font-bold text-black">
          Why we are considered <br />
          the best in business
        </h2>

        {/* Right paragraph */}
        <p className="absolute left-[575px] top-[50px]  max-w-[480px] text-[16px] leading-[22px] text-black font-lato">
          CRL Air freight service delivers the knowledge & opportunity to
          optimize every mile on every lane. Get full-service Truckload division
          to provide more options to manage costs by combining technology
          intelligence.
        </p>

        {/* Main left image with icons and curve */}
        <img
          src={mainImg}
          alt="Why choose us"
          className="absolute left-[-250px] top-[145px] z-10 w-[790px] h-auto object-contain"
        />

        {/* Features */}
        <div className="absolute left-[575px] top-[158px] ">
          <Feature
            title="Global Logistics Operation"
            text="Giving consultancy for every financial projection report and analysis for existing projects."
          />
        </div>

        <div className="absolute left-[615px] top-[250px] z-30">
          <Feature
            title="Modern Warehousing Technique"
            text="Giving consultancy for every financial projection report and analysis for existing projects."
          />
        </div>

        <div className="absolute left-[680px] top-[342px] ">
          <Feature
            title="International Transportation"
            text="Giving consultancy for every financial projection report and analysis for existing projects."
          />
        </div>

        {/* Orange contact box */}
<div className="absolute left-[80px] top-[450px] z-40 w-[1060px] h-[230px] bg-[#ff9200] rounded-[28px] overflow-hidden">
  <div className="absolute left-0 top-0 w-[54%] h-full flex flex-col items-center justify-center text-center px-10">
    <h3 className="text-white text-[31px] leading-[37px] font-bold">
      We ensure safe <br />
      transportations & delivery
    </h3>

    <p className="text-white text-[14px]  max-w-[380px] mt-4">
      “Reliable and secure services that guarantee timely delivery,
      protecting your cargo throughout its journey across all transport
      modes.”
    </p>
  </div>

  <img
    src={contactImg}
    alt="Contact"
    className="absolute right-[120px] bottom-0 h-[230px] w-[335px] object-fill"
  />

  <a
  href="tel:917499358403"
  className="absolute right-[38px] top-1/2 -translate-y-1/2 bg-white rounded-[8px] px-6 py-4 shadow-md flex items-center gap-3"
>
  <span className="text-[#0b2b52] text-[15px]">☎</span>
  <span className="text-[13px] font-semibold text-black">
    917499358403
  </span>
</a>
</div>
      </div>

      {/* TABLET + MOBILE DESIGN */}
      <div className="lg:hidden max-w-[650px] mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-[inset_0_2px_5px_rgba(0,0,0,0.16),_0_3px_8px_rgba(0,0,0,0.22)] mb-6">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="text-[13px] font-medium text-black">
              Choose us
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[30px] leading-tight font-bold text-black">
            Why we are considered <br />
            the best in business
          </h2>

          <p className="text-[14px] leading-[20px] text-black mt-5">
           CRL service delivers the knowledge & opportunity to
            optimize every mile on every lane. Get full-service Truckload
            division to provide more options to manage costs by combining
            technology intelligence.
          </p>
        </div>

        <img
          src={mainImg}
          alt="Why choose us"
          className="w-full mt-8 object-contain"
        />

        <div className="space-y-7 text-center mt-8">
          <Feature
            title="Global Logistics Operation"
            text="Giving consultancy for every financial projection report and analysis for existing projects."
          />

          <Feature
            title="Modern Warehousing Technique"
            text="Giving consultancy for every financial projection report and analysis for existing projects."
          />

          <Feature
            title="International Transportation"
            text="Giving consultancy for every financial projection report and analysis for existing projects."
          />
        </div>

        <div className="mt-10 bg-[#ff9200] rounded-[26px] overflow-hidden">
          <div className="px-8 py-12 text-center">
            <h3 className="text-white text-[26px] sm:text-[30px] leading-tight font-bold">
              We ensure safe <br />
              transportations & delivery
            </h3>

            <p className="text-white text-[11px] leading-[15px] max-w-[380px] mx-auto mt-4">
              “Reliable and secure services that guarantee timely delivery,
              protecting your cargo throughout its journey across all transport
              modes.”
            </p>
          </div>

          <div className="relative h-[250px]">
            <img
              src={contactImg}
              alt="Contact"
              className="absolute inset-0 w-full h-full object-fill"
            />

            <div className="absolute top-1/2 right-5 -translate-y-1/2 bg-white rounded-[8px] px-5 py-3 shadow-md flex items-center gap-3">
              <span className="text-[#0b2b52] text-[15px]">☎</span>
              <span className="text-[12px] font-semibold text-black">
                917499358403
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, text }) => {
  return (
    <div>
      <h3 className="text-[25px] leading-[30px] font-bold text-black">
        {title}
      </h3>

      <p className="text-[14px] leading-[15px] text-black max-w-[360px] mx-auto mt-1">
        {text}
      </p>
    </div>
  );
};

export default WhyChooseUs;