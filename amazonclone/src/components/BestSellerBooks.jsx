import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const BestSellerBooks = () => {
  return (
    <div className=" m-7 p-4 bg-white">
      <div className="font-bold text-lg  xl:text-xl p-2 py-4">
        Best sellers in Books
      </div>
      <Swiper
        slidesPerView={9}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img src={`../images/bs${i}.jpg`} alt="Best seller books" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellerBooks;
