import React from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import HomePageSubCard from "./HomePageSubCard";
import TodaysDealCarousel from "./TodaysDealCarousel";
import BestSellerBooks from "./BestSellerBooks";

const HomePage = () => {
  return (
    <div className=" bg-amazonclone-background ">
      <div className=" bg-amazonclone-background  min-w-[1000px] max-w-[1500px] mx-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4  p-4 -mt-[350px]  ">
          <HomePageCard
            title="Revamp your home in style"
            subCard={
              <div className="grid grid-cols-2">
                <HomePageSubCard
                  img={"../images/Cushion.jpg"}
                  title="Cushion covers, bedsheets "
                />
                <HomePageSubCard
                  img={"../images/HomeDecor.jpg"}
                  title="Home decoration"
                />
                <HomePageSubCard
                  img={"../images/HomeStorage.jpg"}
                  title="Home storage"
                />
                <HomePageSubCard
                  img={"../images/LightingSolution.jpg"}
                  title="Lighting solutions"
                />
              </div>
            }
            link="Explore all"
          />
          <HomePageCard
            title="Up to 60% off | Styles for men"
            subCard={
              <div className="grid grid-cols-2">
                <HomePageSubCard
                  img={"../images/Clothing.jpg"}
                  title="Clothing"
                />
                <HomePageSubCard
                  img={"../images/Footwear.jpg"}
                  title="Footwear"
                />
                <HomePageSubCard
                  img={"../images/watches.jpg"}
                  title="Watches"
                />
                <HomePageSubCard
                  img={"../images/Bags.jpg"}
                  title="Bags & wallets"
                />
              </div>
            }
            link="See all offers"
          />
          <HomePageCard
            title="Up to 75% off | Headphones"
            subCard={
              <div className="grid grid-cols-2">
                <HomePageSubCard
                  img={"../images/Boat.jpg"}
                  title="
                  Up to 75% off | boAt"
                />
                <HomePageSubCard
                  img={"../images/Boult.jpg"}
                  title="
                  
                  Up to 75% off | boult"
                />
                <HomePageSubCard
                  img={"../images/Noise.jpg"}
                  title="
                  Up to 75% off | Noise"
                />
                <HomePageSubCard
                  img={"../images/Zeb.jpg"}
                  title="
                
                  Up to 75% off | Zebronics"
                />
              </div>
            }
            link="see all offers"
          />
          <HomePageCard
            title="Appliances for your home "
            subCard={
              <div className="grid grid-cols-2">
                <HomePageSubCard
                  img={"../images/AC.jpg"}
                  title="
                  Air conditioners"
                />
                <HomePageSubCard
                  img={"../images/Refrig.jpg"}
                  title="
                  
                  Refrigerators"
                />
                <HomePageSubCard
                  img={"../images/microwave.jpg"}
                  title="Micriwaves"
                />
                <HomePageSubCard
                  img={"../images/Washing.jpg"}
                  title="Washing machine"
                />
              </div>
            }
            link="Explore all"
          />
          <div className="xl:hidden">
            {" "}
            <HomePageCard
              title="Styles for women "
              subCard={
                <div className="grid grid-cols-2">
                  <HomePageSubCard
                    img={"../images/WomensClothing.jpg"}
                    title="
                  Women's clothing"
                  />
                  <HomePageSubCard
                    img={"../images/Footwear.jpg"}
                    title="Footwear & Handbags"
                  />
                  <HomePageSubCard
                    img={"../images/Watches.jpg"}
                    title="Watches"
                  />
                  <HomePageSubCard
                    img={"../images/Jewellery.jpg"}
                    title="Fashion Jewellery"
                  />
                </div>
              }
              link="See all offers"
            />
          </div>
          <div className="xl:hidden ">
            {" "}
            <HomePageCard
              title="Automotive essentials "
              subCard={
                <div className="grid grid-cols-2">
                  <HomePageSubCard
                    img={"../images/Cleaning.jpg"}
                    title="
                    Cleaning accessories"
                  />
                  <HomePageSubCard
                    img={"../images/Tyre.jpg"}
                    title="
                    Tyre & rim care  "
                  />
                  <HomePageSubCard
                    img={"../images/Helmet.jpg"}
                    title="Helmets"
                  />
                  <HomePageSubCard
                    img={"../images/Vaccum.jpg"}
                    title="Vaccum cleaner"
                  />
                </div>
              }
              link="See more"
            />
          </div>
        </div>
        <TodaysDealCarousel />
        <BestSellerBooks />
        <div className=" h-[200px]  ">
          <img
            className="h-[100%] m-auto"
            src="../images/banner_image.jpg"
            alt="amazon prime pic"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
