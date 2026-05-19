import React from "react";
import img1 from "../../assets/Sliders/1.png";
import img2 from "../../assets/Sliders/2.png";
import img3 from "../../assets/Sliders/3.png";
import img4 from "../../assets/Sliders/4.png";
import img5 from "../../assets/Sliders/5.png";
import img6 from "../../assets/Sliders/6.png";
import img7 from "../../assets/Sliders/7.png";
import img8 from "../../assets/Sliders/8.png";
import img9 from "../../assets/Sliders/9.png";
import img10 from "../../assets/Sliders/10.png";
import img11 from "../../assets/Sliders/11.png";
import img12 from "../../assets/Sliders/12.png";

const HomeSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,img12];

  return (
    <div className="w-full overflow-hidden py-6 bg-white">

      <div className="relative flex w-max animate-slide">

        {/* ORIGINAL */}
        {images.map((img, i) => (
          <div key={i} className="mx-3 flex-shrink-0">
            <img
              src={img}
              alt=""
              className="h-20 md:h-24 lg:h-28 w-auto object-cover "
            />
          </div>
        ))}

        {/* DUPLICATE (for infinite effect) */}
        {images.map((img, i) => (
          <div key={"dup-" + i} className="mx-3 flex-shrink-0">
            <img
              src={img}
              alt=""
              className="h-20 md:h-24 lg:h-28 w-auto object-cover "
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default HomeSlider;