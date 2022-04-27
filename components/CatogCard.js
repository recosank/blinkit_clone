import React from "react";
import straw from "../public/Images/straw.jpg";
import Image from "next/image";

const CatogCard = () => {
  return (
    <div className="flex w-56 gap-2 p-4 pl-6 flex-col border">
      <div className="row-span-3 flex justify-center items-center">
        <Image
          src={straw}
          width="200"
          height="200"
          className="object-contain"
        />
        <button className=" text-xs bg-lime-400 p-1  rounded-sm">6% OFF</button>
      </div>
      <p className="text-sm text-gray-600 ">Meat 99 Curry Cut Chicken Breast</p>
      <p className="text-xs text-gray-400">500 g</p>
      <div className="flex justify-between">
        <div className="">
          <p className="text-sm decoration-solid">227$</p>
          <p className="text-xs text-gray-400 line-through">229$</p>
        </div>
        <button className="bg-yellow-400 rounded-full text-xs p-2 px-4">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default CatogCard;
