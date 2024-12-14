import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import 'swiper/css'

function Home() {
  return (
    <Swiper
      // scrollbar={{ draggable: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      // onSwiper={(swiper) => console.log(swiper)}

      // spaceBetween={50} 
        slidesPerView={1} 
        // navigation
        loop={true} 
        mousewheel={true}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false,
        }}
    >
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1588449684245-6c9aaaf92a97?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="block object-cover h-[710px] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1731617732560-32268c055254?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="block object-cover h-[710px] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1733218875809-78c2d54e5195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="block object-cover h-[710px] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1732948937655-095f68551734?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="block object-cover h-[710px] w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1731955196267-e863d6f39794?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="block object-cover h-[710px] w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="block object-cover h-[710px] w-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Home;
