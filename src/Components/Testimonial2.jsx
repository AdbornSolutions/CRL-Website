import React, { useEffect, useState } from "react";

const reviews = [
  {
    text: "Collaborating with Marleena from Dwellfinder was a delightful experience. She grasped our vision for our first home and presented us with options that truly resonated with our desires.",
    name: "Adam Smith",
    role: "First-Time Homebuyers",
  },
  {
    text: "The team handled everything professionally. Packing, loading and delivery were smooth and stress-free from start to finish.",
    name: "Rahul Sharma",
    role: "Residential Client",
  },
  {
    text: "Excellent support and safe transportation. Our office relocation was completed on time without any damage.",
    name: "Priya Mehta",
    role: "Corporate Client",
  },
  {
    text: "Very professional team. They packed everything carefully and delivered all items safely.",
    name: "Sneha Patil",
    role: "Household Client",
  },
];

const Testimonial2 = () => {
  const [active, setActive] = useState(0);

  const cardsPerView =
    typeof window !== "undefined" && window.innerWidth >= 640 ? 2 : 1;

  const maxSlide = Math.ceil(reviews.length / cardsPerView) - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxSlide]);

  return (
    <section className="w-full bg-[#f4f4f4] py-14 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-gray-300 shadow rounded-full px-6 py-3 text-[15px] mb-5 shadow-[inset_0_2px_5px_rgba(0,0,0,0.12),_0_3px_8px_rgba(0,0,0,0.25)]">
            <span className="w-4 h-4 bg-black rounded-full"></span>
            Testimonials
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-5">
            What our Clients say
          </h2>

          <p className="text-md text-black leading-relaxed max-w-sm">
            At CRL, we're all about giving you smooth real estate
            solutions that fit your needs, making sure you have a great
            experience every step of the way.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {Array.from({ length: maxSlide + 1 }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {reviews
                  .slice(
                    slideIndex * cardsPerView,
                    slideIndex * cardsPerView + cardsPerView
                  )
                  .map((review, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-300 rounded-2xl p-5 min-h-[210px] h-full shadow-lg flex flex-col justify-between"
                    >
                      <p className="text-md text-black leading-relaxed">
                        “{review.text}”
                      </p>

                      <div className="mt-5">
                        <h4 className="font-bold text-md text-black">
                          {review.name}
                        </h4>
                        <p className="font-semibold text-xs text-black">
                          {review.role}
                        </p>
                        <p className="text-yellow-500 text-xs mt-1">
                          ★★★★★{" "}
                          <span className="text-gray-400">All Reviews</span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5 gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  active === index ? "bg-[#0b2347]" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;