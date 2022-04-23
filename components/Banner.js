import React from "react";
import pu from "../public/Images/pu.jpg";
import Image from "next/image";
//
const Banner = () => {
  return (
    <div className="flex mt-2 w-2/3 h-96">
      <Image src={pu} className="z-0" width={1300} />
      <div className="absolute w-1/3 mt-24 ml-8 flex flex-col z-10">
        <p className="text-3xl font-mono leading-normal text-white">
          Don't miss our daily amazing deals.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          download the app and get{" "}
          <span className="text-lime-400">$75 off</span> on your first order!
          <span>
            <button className="p-1 ml-2 rounded-lg text-gray-900 hover:text-white text-xs bg-gray-600">
              Download
            </button>
          </span>
        </p>
        <div className="flex mt-11 h-9 w-72 bg-white justify-between rounded-md">
          <input
            type="text"
            className="text-xs rounded-md p-1 "
            placeholder="enter your email address"
          />
          <button className="text-sm p-1 bg-yellow-500 text-zinc-700 rounded-r-md">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
