import React, { useRef, useState } from "react";

// IMAGES
import img1 from "../../assets/Sliders/21.png";
import img2 from "../../assets/Sliders/22.png";
import img3 from "../../assets/Sliders/23.png";
import img4 from "../../assets/Sliders/24.png";
import img5 from "../../assets/Sliders/25.png";
import img6 from "../../assets/Sliders/26.png";
import img7 from "../../assets/Sliders/27.png";
import img8 from "../../assets/Sliders/28.png";

// ICONS
import icon1 from "../../assets/Sliders/icon1.png";
import icon2 from "../../assets/Sliders/icon2.png";
import icon3 from "../../assets/Sliders/icon3.png";

const services = [
  {
    img: img1,
    icon: icon1,
    title: "Domestic Shifting",
    desc: "Domestic shifting involves shifting goods from one place to another city.",
  },
  {
    img: img2,
    icon: icon2,
    title: "Household Shifting",
    desc: "Shifting of all household items like glass items, paintings, and more.",
  },
  {
    img: img3,
    icon: icon3,
    title: "Office Shifting",
    desc: "We provide complete office relocation services from start to end.",
  },
  {
    img: img4,
    icon: icon1,
    title: "Car Shifting",
    desc: "We holds expertise in providing excellent Car & Bike Transport Service.",
  },
  {
    img: img5,
    icon: icon2,
    title: "Corporate Shifting",
    desc: "Leader in Providing relocation & Moving solutions to corporate.",
  },
  {
    img: img6,
    icon: icon3,
    title: "International Shifting",
    desc: "Trusted by corporations & governments around the world.",
  },
  {
    img: img7,
    icon: icon1,
    title: "Storage Facility",
    desc: "Affordable, Convenient & Secured Storage facilities. Document Storage.",
  },
  {
    img: img8,
    icon: icon2,
    title: "Bulk Shifting",
    desc: "Maintains top-class Bulk / Commercial / Parcel transport operations...",
  },
];

const ShipingService = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = services.length;

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let newIndex = index;

    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }

    if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    const cards = slider.querySelectorAll(".service-card");
    const targetCard = cards[newIndex];

    if (targetCard) {
      slider.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth",
      });
    }

    setActiveIndex(newIndex);
  };

  const scrollSlider = (direction) => {
    if (direction === "next") {
      scrollToCard(activeIndex + 1);
    } else {
      scrollToCard(activeIndex - 1);
    }
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.querySelectorAll(".service-card"));

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - slider.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 bg-white py-3 px-8 rounded-full shadow-[inset_0_4px_10px_rgba(0,0,0,0.2),_0_4px_15px_rgba(0,0,0,0.25)] mb-5 max-w-max">
              <span className="w-4 h-4 bg-black rounded-full"></span>
              <span className="text-sm font-semibold text-black">
                Shipping Services.
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[50px] leading-none text-black mb-7">
              What we Offer
            </h2>

            <p className="font-body text-base sm:text-lg text-[#3f4c5c] leading-relaxed max-w-[500px] mb-10">
              Comprehensive logistics solutions for seamless and efficient
              business management.
            </p>

            <div className="flex items-center gap-5">
              <button
                onClick={() => scrollSlider("prev")}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-xl hover:bg-[#0b2347] hover:text-white transition"
              >
                ←
              </button>

              <span className="font-body text-lg text-[#0b2347] min-w-[55px] text-center">
                {activeIndex + 1} / {totalSlides}
              </span>

              <button
                onClick={() => scrollSlider("next")}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-xl hover:bg-[#0b2347] hover:text-white transition"
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
              className="shipping-slider flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-[360px]"
            >
              {services.map((item, index) => (
                <div
                  key={index}
                  className="service-card snap-start min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] bg-white"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[185px] sm:h-[210px] object-cover"
                    />

                    <div className="absolute -bottom-7 left-6 w-16 h-16 rounded-full bg-[#ff7a00] border-4 border-white shadow-lg flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className=""
                      />
                    </div>
                  </div>

                  <div className="pt-11 px-6 pb-5">
                    <h3 className="font-heading text-2xl text-black mb-3">
                      {item.title}
                    </h3>

                    <p className="font-body  text-lg text-[#3f4c5c] leading-relaxed">
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