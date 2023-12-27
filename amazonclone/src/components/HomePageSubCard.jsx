import React from "react";

const HomePageSubCard = ({ img, title }) => {
  return (
    <div className=" bg-white p-2">
      <div className="">
        <img
          className="h-[100%] w-[100%] object-cover p-2"
          src={img}
          alt="Cushion"
        />
      </div>
      <div className="text-xs font-semibold pl-2 ">{title}</div>
    </div>
  );
};

export default HomePageSubCard;
