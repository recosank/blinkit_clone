import React from "react";
import MiddleMBodyCard from "./MiddleMBodyCard";
import kau from "../public/Images/kau.jpg";
import three from "../public/Images/three.jpg";
import two from "../public/Images/two.jpg";

const MiddleMBody = () => {
  return (
    <div className="flex w-2/3 items-center h-40 justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 p-1 border-2 rounded-md text-gray-400 hover:text-gray-500"
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
      <MiddleMBodyCard imm={kau} />
      <MiddleMBodyCard imm={two} />
      <MiddleMBodyCard imm={three} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 p-1 border-2 rounded-md text-gray-400 hover:text-gray-500"
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

export default MiddleMBody;
