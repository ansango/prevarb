import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImagesSlider, ImagesCarousel } from "components/images";
import Image from "next/image";

import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

export const Slider: FC = () => {
  return (
    <Swiper className="w-full h-full" navigation={true}>
      {ImagesSlider.map((image: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <Image src={image.src} key={image.id} alt={image.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const Carousel: FC = () => {
  return (
    <Swiper
      className="w-full h-full"
      navigation={true}
      loop
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {ImagesCarousel.map((image: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="p-20 sm:p-10">
              <Image src={image.src} key={image.id} alt={image.alt} className="rounded-full" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
