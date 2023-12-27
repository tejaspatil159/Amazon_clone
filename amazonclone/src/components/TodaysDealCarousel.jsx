import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TodaysDealCarousel = () => {
  return (
    <div className="bg-white  mx-7 py-5 ">
      <div className="flex ml-5">
        <div className=" font-bold text-lg xl:text-xl p-2"> Today's Deals</div>
        <p className="p-3 text-blue-700 text-sm">See all deals</p>
      </div>

      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td0.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 25% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Helmet & bike accessories
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td1.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 30% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Cookware, pots & pans
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td2.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 20% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Health and Sports Supplements
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td3.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 25% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5  text-xs font-semibold">
              Travel Adapters And Electronics
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td4.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 45% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">Snacks</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td5.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 25% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">Wallpapers</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td6.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 30% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Medical products
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Helmet & bike accessories
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td7.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 87% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Wallpapers starting from 149
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td8.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 65% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Gardening tool equipments
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td9.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 55% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Puma footware and clothing
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td10.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 70% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Bath hardware accessories
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="m-5">
              <img src={"../images/td11.jpg"} alt="Todays deal" />
            </div>
            <div className="flex my-2 ">
              <div className=" rounded-sm mx-4 p-1 bg-red-600 text-white text-xs">
                Up to 45% off
              </div>
              <p className="font-bold text-xs py-1 text-red-800">
                Deals of the day
              </p>
            </div>
            <div className="mx-5 text-xs font-semibold">
              Creatine suppliments
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TodaysDealCarousel;
