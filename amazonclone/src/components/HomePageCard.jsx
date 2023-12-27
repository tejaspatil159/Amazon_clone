import React from "react";

const HomePageCard = ({ title, subCard, link }) => {
  return (
    <div className="h-[380px] bg-white m-3 z-30 ">
      <div className="font-bold m-4 text-lg xl:text-xl">{title}</div>
      <div className="">{subCard}</div>
      <div className="text-blue-700 text-xs p-4 ">{link}</div>
    </div>
  );
};

export default HomePageCard;
