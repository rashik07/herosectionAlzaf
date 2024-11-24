"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Sidebar from "./Sidebar";


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


const Slider = () => {
  return (
    <>
  
    

        <div className="w-full  z-0">
          <Swiper
              modules={[Navigation, Pagination]}
            // navigation
            pagination={{ clickable: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <img
                src="/slider.png"
                alt="Hero Slide 1"
                className="w-full h-64 object-cover"
                style={{ height:"391px"}}
              />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <img
                src="/slider.png"
                alt="Hero Slide 2"
                className="w-full h-64 md:h-96 object-cover"
              />
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <img
                src="/slider.png"
                alt="Hero Slide 3"
                className="w-full h-64 md:h-96 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
   
    </>
  );
};

export default Slider;
