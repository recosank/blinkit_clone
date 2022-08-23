import React from "react";
import CartCard from "./CartCard";
import dog from "../public/Images/dog.jpg";
import Image from "next/image";

const CartHeader = ({ items, close, tot }) => {
  return (
    <div className="flex flex-col items-center  h-full">
      <div className="flex justify-between shadow-md p-2  w-full items-center">
        <p className="font-bold text-xl">My Cart</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={(e) => close(e)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {items.length === 0 && (
        <div className="flex flex-col items-center h-3/5 w-full  justify-around">
          <Image
            src={dog}
            width="300"
            height="300"
            className="object-contain"
          />
          <p className="text-md font-bold text-center w-9/12">
            you don't have any items in your cart
          </p>
          <p className="text-xs text-gray-400">
            your favourites items are just click away
          </p>
          <button className="bg-lime-700 px-10 p-2 text-xs text-white font-bold">
            start shopping
          </button>
        </div>
      )}

      {items.length > 0 && (
        <div className="w-full h-full border-2 flex flex-col justify-between">
          <div
            className={`h-5/6 ${
              items.length > 5 && "overflow-y-scroll"
            } border-2`}
          >
            {items.map((val, ind) => {
              return <CartCard val={val} key={ind} />;
            })}
          </div>
          <div className="bg-lime-500 p-5 z-50 h-26 w-full inset-x-0 bottom-0 border ">
            <button className="">process payment of {tot}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartHeader;
