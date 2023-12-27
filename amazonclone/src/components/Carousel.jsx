import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const Carousel = () => {
  return (
    <div className="bg-white h-[608px] m-auto">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4500 }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"../images/Carousel1.jpg"} alt="Carousel1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/Carousel2.jpg"} alt="Carousel2"></img>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={"../images/Carousel_vid.mp4"} alt="Carousel3" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/Carousel4.jpg"} alt="Carousel4"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/Carousel_5.jpg"} alt="Carousel5"></img>
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] mx-auto bg-gradient-to-b from-black" />
    </div>
  );
};
export default Carousel;
