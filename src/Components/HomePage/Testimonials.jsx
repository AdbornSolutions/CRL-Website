import React from "react";

const testimonials = [
  {
    text: "CRL Packers and Movers made our home shifting completely stress-free. The team packed every item carefully, handled our furniture safely, and delivered everything on time without any damage.",
    name: "Rohit Sharma",
    role: "Home Relocation Client",
  },
  {
    text: "We hired CRL for our office relocation, and their service was excellent. They managed the packing, loading, transportation, and setup very professionally with minimum downtime for our team.",
    name: "Priya Mehta",
    role: "Office Shifting Client",
  },
  {
    text: "The CRL team transported my car and household goods safely from one city to another. Their tracking support, polite staff, and careful handling gave me complete peace of mind.",
    name: "Amit Verma",
    role: "Domestic Shifting Client",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white py-3 px-5 rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.12),_0_3px_8px_rgba(0,0,0,0.25)] mb-5">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="text-[14px] font-medium text-black">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[26px] sm:text-[28px] leading-tight font-bold text-black">
          What our Clients say
        </h2>

        <p className="text-[13px] sm:text-[14px] text-black leading-[1.35] mt-3 max-w-[580px] mx-auto">
          At CRL, we're all about giving you smooth real estate
          solutions that fit your needs,
          <br className="hidden sm:block" />
          making sure you have a great experience every step of the way.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-400 rounded-[18px] px-5 py-8 text-left min-h-[190px] shadow-[6px_6px_0px_rgba(0,0,0,0.28)]"
            >
              <p className="text-[16px] leading-[1.15] text-black">
                “{item.text}”
              </p>

              <div className="mt-5">
                <h4 className="text-[14px] font-semibold text-black">
                  {item.name}
                </h4>

                <p className="text-[13px] font-semibold text-black">
                  {item.role}
                </p>

                <div className="text-[18px] text-yellow-500 mt-2 tracking-[-1px]">
                  ★★★★★ <span className="text-gray-400 text-[15px]">5.0 Rating</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;