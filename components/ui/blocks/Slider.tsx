import { FC, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"
import { ImagesSlider } from 'components/images';
import Image from 'next/image';

import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const Slider: FC = () => {
  console.log("Slider");
  return (
    <Swiper className="w-full h-full" navigation={true}>
      {ImagesSlider.map((image: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <Image src={image.src} key={image.id} alt={image.alt} />
          </SwiperSlide>
        )
      })}
    </Swiper>

  )
}

export default Slider

