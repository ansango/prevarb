import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
    Navigation
} from 'swiper';

import carrots from "public/static/images/carrots1.jpg"
import fruits from "public/static/images/fruits1.jpg"


SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <>
         
        <Swiper navigation={true} className="w-full h-full">
          <SwiperSlide>
            <Image src={carrots}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={fruits}/>
          </SwiperSlide>
        </Swiper>
        </>
    )
}

export default Slider
