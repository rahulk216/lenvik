import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/hero-images/bg1.jpg";
import AnimatedText from "./animations/AnimatedText";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const textRef = useRef(null);
  const heroImages = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 1,
      img: img1,
    },
    {
      id: 1,
      img: img1,
    },
    {
      id: 1,
      img: img1,
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => {}}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination, Navigation]}
      onSwiper={(swiper) => {}}>
      {heroImages.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[70vh] overflow-hidden">
            <img
              src={item.img}
              alt="img"
              className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out scale-100 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-blue1/70 z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-10 text-white">
              <AnimatedText
                type="h1"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
                style="text-4xl font-bold mb-5"
                delay={30}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                maiores consectetur necessitatibus mollitia velit nam
                exercitationem reprehenderit esse fugit voluptatibus explicabo,
                delectus dolores praesentium ea dolor molestiae, voluptate dicta
                veniam tempora, quia quaerat consequatur ab. Enim minus maxime
                ea dolor officia culpa. Magnam, fugiat. Quos facilis nobis natus
                iste nemo." style="max-w-xl
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
