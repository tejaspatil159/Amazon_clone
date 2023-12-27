import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";

const Navbar = () => {
  return (
    <header className=" mx-auto min-w-[1000px]">
      <div className="text-white bg-amazonclone-darkblue flex h-[60px] ">
        <div className="flex items-center mx-4 ">
          <img
            className="h-[32px] w-[100px] object-cover  "
            src={"../images/amazon.png"}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <LocationOnOutlinedIcon className="h-[48px] -mr-4" />
        </div>

        <div className=" flex flex-col justify-center mx-4 ">
          <div className="  text-xs  ">Deliver to</div>
          <div className="font-bold text-base -mt-1">Mumbai</div>
        </div>

        <div className="flex grow items-center mx-4">
          <Search />
        </div>

        <div className=" flex flex-col justify-center  ">
          <div className="  text-xs  ">Hello, sign in</div>
          <select className="font-bold text-base  bg-amazonclone-darkblue -ml-1  ">
            <option>Accounts & Lists</option>
          </select>
        </div>
        <div className=" flex flex-col justify-center mx-4 ">
          <div className="  text-xs  ">Returns </div>
          <div className="font-bold text-base -mt-1 whitespace-nowrap">
            & Orders
          </div>
        </div>
        <div className="flex items-center ">
          <ShoppingCartOutlinedIcon fontSize="large" />
        </div>
        <div className=" flex flex-col justify-center -ml-1 -mb-4 mx-4 ">
          <div className="font-bold text-base -mt-1">Cart</div>
        </div>
      </div>
      <div className="flex items-center  text-white bg-amazonclone-lightblue space-x-6 xl:space-x-8 h-[40px]   ">
        <div className="flex ml-4 ">
          <MenuIcon />
          <div className="ml-1">All</div>
        </div>
        <div>Prime</div>
        <div>Mobiles</div>
        <div className="whitespace-nowrap">Today's Deals</div>
        <div className="whitespace-nowrap">Best sellers</div>
        <div className="whitespace-nowrap">Amazon miniTV</div>
        <div className="whitespace-nowrap hidden xl:block ">Gift Cards</div>
        <div className="whitespace-nowrap hidden xl:block">Amazon Pay</div>
        <div className="hidden 2xl:block">Coupons</div>
        <div className="whitespace-nowrap hidden  2xl:block">Gift Ideas</div>
        <div className="flex flex-grow justify-end">
          <img
            className="object-cover"
            src="../images/amazonPrime.jpg"
            alt="Amazon Prime"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
