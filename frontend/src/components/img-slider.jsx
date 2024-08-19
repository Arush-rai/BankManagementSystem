import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-100 object-cover' src="/slide1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100 object-cover' src="/slide2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100 object-cover' src="/slide3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100 object-cover' src="/slide4.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}