import React from "react";
import Image from "next/image";
import cho from "../public/Images/cho.jpg";

const MiddleBanner = () => {
  return (
    <div className="flex justify-between items-center mt-5 w-2/3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 p-1.5 rounded-full text-slate-50 bg-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <Image src={cho} width={970} height={450} className="object-cover" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 p-1.5 text-slate-50 rounded-full  bg-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default MiddleBanner;
