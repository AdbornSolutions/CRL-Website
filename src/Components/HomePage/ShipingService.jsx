import React, { useRef, useState } from "react";

import img1 from "../../assets/Sliders/21.png";
import img2 from "../../assets/Sliders/22.png";
import img3 from "../../assets/Sliders/23.png";
import img4 from "../../assets/Sliders/24.png";
import img5 from "../../assets/Sliders/25.png";
import img6 from "../../assets/Sliders/26.png";
import img7 from "../../assets/Sliders/27.png";
import img8 from "../../assets/Sliders/28.png";

import icon1 from "../../assets/Sliders/icon1.png";
import icon2 from "../../assets/Sliders/icon2.png";
import icon3 from "../../assets/Sliders/icon3.png";

const services = [
  { img: img1, icon: icon1, title: "Domestic Shifting", desc: "Domestic shifting involves shifting goods from one place to another city." },
  { img: img2, icon: icon2, title: "Household Shifting", desc: "Shifting of all household items like glass items, paintings, and more." },
  { img: img3, icon: icon3, title: "Office Shifting", desc: "We provide complete office relocation services from start to end." },
  { img: img4, icon: icon1, title: "Car Shifting", desc: "We hold expertise in providing excellent car and bike transport service." },
  { img: img5, icon: icon2, title: "Corporate Shifting", desc: "Leader in providing relocation and moving solutions to corporates." },
  { img: img6, icon: icon3, title: "International Shifting", desc: "Trusted by corporations and customers around the world." },
  { img: img7, icon: icon1, title: "Storage Facility", desc: "Affordable, convenient, and secured storage facilities for your goods." },
  { img: img8, icon: icon2, title: "Bulk Shifting", desc: "Maintains top-class bulk, commercial, and parcel transport operations." },
];

const ShipingService = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = services.length;

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const newIndex = (index + totalSlides) % totalSlides;
    const card = slider.children[newIndex];

    if (card) {
      slider.scrollTo({
        left: card.offsetLeft - slider.offsetLeft,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    }

    setActiveIndex(newIndex);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollLeft = slider.scrollLeft;
    const cards = Array.from(slider.children);

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - slider.offsetLeft - scrollLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-10 lg:gap-14 items-center">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 bg-white py-3 px-7 rounded-full shadow-[inset_0_4px_10px_rgba(0,0,0,0.15),_0_4px_15px_rgba(0,0,0,0.2)] mb-5 max-w-max">
              <span className="w-4 h-4 bg-black rounded-full"></span>
              <span className="text-sm font-semibold text-black">
                Shipping Services.
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[52px] leading-tight text-black mb-6">
              What we Offer
            </h2>

            <p className="font-body text-base sm:text-lg text-[#3f4c5c] leading-relaxed max-w-[500px] mb-10">
              Comprehensive logistics solutions for seamless and efficient
              business management.
            </p>

            <div className="flex items-center gap-5">
              <button
                onClick={() => scrollToCard(activeIndex - 1)}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-xl hover:bg-[#0b2347] hover:text-white hover:border-[#0b2347] transition"
              >
                ←
              </button>

              <span className="font-body text-lg text-[#0b2347] min-w-[55px] text-center">
                {activeIndex + 1} / {totalSlides}
              </span>

              <button
                onClick={() => scrollToCard(activeIndex + 1)}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-xl hover:bg-[#0b2347] hover:text-white hover:border-[#0b2347] transition"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="w-full overflow-hidden">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4"
            >
              {services.map((item, index) => (
                <div
                  key={index}
                  data-reveal
                  className="motion-card snap-start shrink-0 w-[280px] sm:w-[330px] lg:w-[360px] bg-white rounded-2xl"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[190px] sm:h-[215px] object-cover "
                    />

                    <div className="absolute -bottom-7 left-7 w-16 h-16 rounded-full bg-[#ff7a00] border-4 border-white shadow-lg flex items-center justify-center">
                      <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
                    </div>
                  </div>

                  <div className="pt-12 px-7 pb-6">
                    <h3 className="font-heading text-2xl text-black mb-3">
                      {item.title}
                    </h3>

                    <p className="font-body text-lg text-[#3f4c5c] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShipingService;
