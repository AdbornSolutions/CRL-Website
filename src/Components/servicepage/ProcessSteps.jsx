import React from "react";

import step1 from "../../assets/servicepage/step1.png";
import step2 from "../../assets/servicepage/step2.png";
import step3 from "../../assets/servicepage/step3.png";

const steps = [
  {
    number: "1",
    title: "Step 1. Receive Packages",
    description:
      "Logisco Air freight service deliver to knowledge & opportunity to optimize. Logisco Air freight service deliver to knowledge and opportunity to optimize.",
    image: step1,
  },
  {
    number: "2",
    title: "Step 2. Transport Packages",
    description:
      "Logisco Air freight service deliver to knowledge & opportunity to optimize. Logisco Air freight service deliver to knowledge and opportunity to optimize.",
    image: step2,
  },
  {
    number: "3",
    title: "Step 3. Deliver Packages",
    description:
      "Logisco Air freight service deliver to knowledge & opportunity to optimize. Logisco Air freight service deliver to knowledge and opportunity to optimize.",
    image: step3,
  },
];

const ProcessSteps = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-12 px-4 sm:px-6 overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto">
        {/* Heading */}
        <div className="text-left mb-8 lg:mb-0">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-[inset_0_2px_5px_rgba(0,0,0,0.15),_0_3px_8px_rgba(0,0,0,0.22)] mb-5">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="text-[12px] font-medium text-black">
              Our work Process
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.15] font-bold text-black max-w-[500px]">
            We always follow the best <br />
            ways of logistics
          </h2>

          <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.45] text-black mt-4 max-w-[620px]">
            Committed to using the most efficient and reliable logistics
            practices, ensuring timely and secure delivery for all our clients.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden lg:block h-[560px] mt-[-10px]">
          {/* Black Curved Line */}
          <svg
            className="absolute left-[0px] top-[145px] w-[1160px] h-[230px] z-0 pointer-events-none"
            viewBox="0 0 1160 230"
            fill="none"
          >
            <path
              d="M0 145
              C120 205 245 190 340 95
              C420 15 560 75 700 78
              C835 82 830 18 950 18
              C1040 18 1085 18 1160 18"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Step 1 */}
          <div className="absolute left-[0px] top-[235px] w-[300px] z-10">
            <div className="relative h-[112px]">
              <div className="absolute left-[75px] top-[0px] w-[82px] h-[82px] rounded-full bg-[#082a52] flex items-center justify-center z-20">
                <img
                  src={steps[0].image}
                  alt={steps[0].title}
                  className=""
                />
              </div>

              <span className="absolute left-[165px] top-[8px] text-[84px] leading-none text-black z-10">
                1
              </span>
            </div>

            <h3 className="text-[24px] leading-[25px] font-bold text-black">
              Step 1. Receive <br />
              Packages
            </h3>

            <p className="text-[16px] leading-[19px] text-black mt-4 max-w-[240px]">
              {steps[0].description}
            </p>
          </div>

          {/* Step 2 */}
          <div className="absolute left-[410px] top-[190px] w-[310px] z-10">
            <div className="relative h-[108px]">
              <div className="absolute left-[145px] top-[0px] w-[82px] h-[82px] rounded-full bg-[#082a52] flex items-center justify-center z-20">
                <img
                  src={steps[1].image}
                  alt={steps[1].title}
                  className=""
                />
              </div>

              <span className="absolute left-[220px] top-[46px] text-[84px] leading-none text-black z-10">
                2
              </span>
            </div>

            <h3 className="text-[24px] leading-[25px] font-bold text-black">
              Step 2. Transport <br />
              Packages
            </h3>

            <p className="text-[16px] leading-[19px] text-black mt-4 max-w-[245px]">
              {steps[1].description}
            </p>
          </div>

          {/* Step 3 */}
          <div className="absolute left-[830px] top-[95px] w-[330px] z-10">
            <div className="relative h-[105px]">
              <div className="absolute left-[60px] top-[0px] w-[82px] h-[82px] rounded-full bg-[#082a52] flex items-center justify-center z-20">
                <img
                  src={steps[2].image}
                  alt={steps[2].title}
                  className=""
                />
              </div>

              <span className="absolute left-[145px] top-[-15px] text-[84px] leading-none text-black z-10">
                3
              </span>
            </div>

            <h3 className="text-[24px] leading-[25px] font-bold text-black">
              Step 3. Deliver <br />
              Packages
            </h3>

            <p className="text-[16px] leading-[19px] text-black mt-4 max-w-[250px]">
              {steps[2].description}
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative inline-block h-[110px]">
                <div className="w-[78px] h-[78px] rounded-full bg-[#082a52] flex items-center justify-center mx-auto relative z-20">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-[40px] h-[40px] object-contain"
                  />
                </div>

                <span className="absolute left-[55px] top-[42px] text-[68px] leading-none text-black z-10">
                  {step.number}
                </span>
              </div>

              <h3 className="text-[18px] leading-[22px] font-bold text-black mt-3">
                {step.title}
              </h3>

              <p className="text-[13px] leading-[18px] text-black mt-3 max-w-[250px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;