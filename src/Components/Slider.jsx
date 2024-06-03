import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import slide1 from "../Images/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
import slide2 from "../Images/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
import slide3 from "../Images/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"
import slide4 from "../Images/9b94179a-9a1e-46b5-ac78-e327e26c04701716043077970-Desktop-Banner.jpg"
import slide5 from "../Images/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
import slide6 from "../Images/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
