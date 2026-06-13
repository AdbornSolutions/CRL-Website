import React from "react";

import step1Icon from "../../assets/homepage/step1-1.png";
import step2Icon from "../../assets/homepage/step2-2.png";
import step3Icon from "../../assets/homepage/step3-3.png";

const steps = [
  {
    image: step1Icon,
    title: "Step 1. Receive Packages",
  },
  {
    image: step2Icon,
    title: "Step 2. Transport Packages",
  },
  {
    image: step3Icon,
    title: "Step 3. Deliver Packages",
  },
];

const WorkProcess = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* TITLE */}
        <div className="mb-10 lg:mb-0">
          <div className="inline-flex items-center gap-3 bg-white py-3 px-8 rounded-full shadow-[inset_0_4px_10px_rgba(0,0,0,0.15),_0_4px_15px_rgba(0,0,0,0.25)] mb-6">
            <span className="w-4 h-4 bg-black rounded-full"></span>
            <span className="text-sm font-semibold text-black">
              Our work Process
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[34px] lg:text-[36px] leading-[1.2] font-bold text-black">
            We always follow the best <br />
            ways at CRL
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#263447] leading-[1.6] mt-6 max-w-[620px]">
            Committed to using the most efficient and reliable logistics
            practices, ensuring timely and secure delivery for all our clients.
          </p>
        </div>

        {/* DESKTOP DESIGN */}
        <div className="relative hidden lg:block h-[560px] mt-[-30px]">
          {/* BLACK CURVE LINE */}
          <svg
            className="absolute left-[120px] top-[120px] w-[1060px] h-[300px] z-0 pointer-events-none"
            viewBox="0 0 1060 300"
            fill="none"
          >
            <path
              d="M70 250 C210 250 195 135 350 135 H435 C555 135 535 25 690 25 H980"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* STEP 1 */}
          <div className="absolute left-[0px] top-[200px] w-[335px] text-center z-10">
            <img
              src={steps[0].image}
              alt={steps[0].title}
              className="w-[250px] h-auto object-contain mx-auto"
            />

            <h3 className="text-[28px] leading-[34px] font-bold text-black mt-8">
              {steps[0].title}
            </h3>

            <p className="text-[17px] leading-[1.55] text-[#263447] mt-5">
              CRL  service deliver to knowledge & opportunity to
              optimize. CRL Air freight service deliver to knowledge and
              opportunity to optimize.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="absolute left-[420px] top-[125px] w-[360px] text-center z-10">
            <img
              src={steps[1].image}
              alt={steps[1].title}
              className="w-[260px] h-auto object-contain mx-auto"
            />

            <h3 className="text-[28px] leading-[34px] font-bold text-black mt-8">
              Step 2. Transport <br />
              Packages
            </h3>

            <p className="text-[17px] leading-[1.55] text-[#263447] mt-5 max-w-[330px] mx-auto">
              CRL service deliver to knowledge & opportunity to
              optimize. Logisco Air freight service deliver to knowledge and
              opportunity to optimize.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="absolute right-[0px] top-[25px] w-[380px] text-center z-10">
            <img
              src={steps[2].image}
              alt={steps[2].title}
              className="w-[260px] h-auto object-contain mx-auto"
            />

            <h3 className="text-[28px] leading-[34px] font-bold text-black mt-8">
              {steps[2].title}
            </h3>

            <p className="text-[17px] leading-[1.55] text-[#263447] mt-5 max-w-[360px] mx-auto">
             CRL service deliver to knowledge & opportunity to
              optimize. Logisco Air freight service deliver to knowledge and
              opportunity to optimize.
            </p>
          </div>
        </div>

        {/* TABLET + MOBILE DESIGN */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center ${
                index === 2 ? "sm:col-span-2 sm:max-w-[380px] sm:mx-auto" : ""
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-[240px] h-auto object-contain mx-auto"
              />

              <h3 className="text-[24px] leading-[30px] font-bold text-black mt-7">
                {step.title}
              </h3>

              <p className="text-[15px] leading-[1.55] text-[#263447] mt-4 max-w-[330px] mx-auto">
               CRL service deliver to knowledge & opportunity
                to optimize. Logisco Air freight service deliver to knowledge
                and opportunity to optimize.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;