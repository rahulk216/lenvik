import React, { useState } from "react";
import img1 from "../assets/hero-images/bg1.jpg";
import SectionHeader from "./SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="relative">
      {/* Image as background layer */}
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue1/70 z-10"></div>

      {/* Foreground content */}
      <div className="relative z-20 p-10">
        <SectionHeader text="FEATURE IMAGES" color="white" />
        <h2 className="font-semibold text-3xl text-white">
          Featured Images That Tell Your Story.
        </h2>
        <div className="grid text-white grid-cols-1 mt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            aperiam cumque provident dignissimos voluptatibus, eaque minus
            placeat, ipsa velit laborum ipsam debitis explicabo, nisi quidem
            similique labore optio impedit. Dolorum dicta ab ipsa corrupti
            laborum et nesciunt fuga, veritatis amet perferendis vel sapiente!
            Nam iste atque beatae officiis laboriosam ratione
          </p>
          <div className="mt-5">
            <Swiper
              modules={[Navigation, Pagination, EffectCards, Autoplay]}
              effect={"cards"}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              scrollbar={{ draggable: true }}
              navigation={true}
              pagination={true}>
              {[1, 2, 3, 4, 5].map((image, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <img src={img1} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
