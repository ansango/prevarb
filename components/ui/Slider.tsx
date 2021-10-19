import { FC, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
  Navigation, Pagination
} from 'swiper';

SwiperCore.use([Navigation, Pagination]);

type Slide = {
  elements: any[],
  navigation?: boolean
  slidesPerView?: number,
  spaceBetween?: number,
  slidesPerGroup?: number,
  loop?: boolean,
}


const Slider: FC<Slide> = ({
  elements,
  navigation = false,
  slidesPerView = 1,
  spaceBetween = 0,
  slidesPerGroup = 1,
  loop = false
}) => {
  return (
    <Swiper
      className="w-full h-full"
      navigation={navigation}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
    >
      {elements.map((element, index) => (
        <SwiperSlide key={index}>
          {element}
        </SwiperSlide>
      ))}
    </Swiper>

  )
}

export default Slider

