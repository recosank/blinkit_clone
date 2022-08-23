import React, { useState } from "react";
import MiddleMBodyCard from "./MiddleMBodyCard";

const MiddleMBody = ({ data }) => {
  const [startValue, setstartValue] = useState(0);
  const [endValue, setendValue] = useState(3);
  const resetState = () => {
    setendValue(3);
    setstartValue(0);
  };
  const handleState = (exp) => {
    if (exp === "fwd") {
      setstartValue((p) => p + 3);
      setendValue((p) => p + 3);
    } else {
      setstartValue((p) => p - 3);
      setendValue((p) => p - 3);
    }
  };
  const handleBwd = () => {
    startValue > 0 && handleState("bwd");
  };
  const handleFwd = () => {
    endValue >= data.length ? resetState() : handleState("fwd");
  };
  return (
    <div className="flex w-2/3 items-center h-40 justify-between overflow-hidden space-x-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 p-1 border-2 rounded-md text-gray-400 hover:text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={handleBwd}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {data.slice(startValue, endValue).map((val, ind) => {
        const i = new Buffer.from(val.cover.data).toString("base64");
        return <MiddleMBodyCard val={val} key={ind} immg={i} />;
      })}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 p-1 border-2 rounded-md text-gray-400 hover:text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={handleFwd}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default MiddleMBody;
