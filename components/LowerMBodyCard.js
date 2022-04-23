import React from "react";
import straw from "../public/Images/straw.jpg";
import Image from "next/image";

const LowerMBodyCard = () => {
  return (
    <div className="flex flex-col ">
      <div className="border-2 flex rounded-md">
        <Image
          src={straw}
          width={150}
          height={140}
          className="object-contain absolute z-0"
        />
        <button className="absolute z-10 w-9 text-xs bg-lime-400 rounded-tl-md">
          4% OFF
        </button>
      </div>
      <div className="flex flex-col ml-2 justify-between flex-grow pb-3 content-around">
        <p className="text-xs text-slate-600">fruits</p>
        <p className="text-sm">Halal sausage 350g</p>
        <p className="text-xs text-slate-600">
          By <span className="text-xs text-lime-800">Mr.food </span>
        </p>
        <p className="text-sm text-lime-700">
          $4 <span className="text-xs text-slate-600 line-through">$10</span>
        </p>
      </div>
      <div className="flex justify-center bg-lime-500 p-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <button className="text-sm">Add to cart</button>
      </div>
    </div>
  );
};

export default LowerMBodyCard;
