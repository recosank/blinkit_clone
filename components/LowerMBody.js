import React, { useState } from "react";
import LowerMBodyCard from "./LowerMBodyCard";

const LowerMBody = ({ title, data, titleTwo }) => {
  const [startValue, setstartValue] = useState(0);
  const [endValue, setendValue] = useState(7);
  const resetState = () => {
    setendValue(7);
    setstartValue(0);
  };
  const handleState = (exp) => {
    if (exp === "fwd") {
      setstartValue((p) => p + 7);
      setendValue((p) => p + 7);
    } else {
      setstartValue((p) => p - 7);
      setendValue((p) => p - 7);
    }
  };
  const handleBwd = () => {
    startValue > 0 && handleState("bwd");
  };
  const handleFwd = () => {
    endValue >= data.length ? resetState() : handleState("fwd");
  };
  return (
    <div className="grid grid-rows-6 w-2/3 ">
      <div className="grid grid-cols-2 place-items-end">
        <div className="grid-rows-2 place-self-start">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-xs text-slate-400">{titleTwo}</p>
        </div>
        <div className="grid mb-3 grid-cols-2  place-items-start">
          <div className="grid grid-cols-2 place-self-center place-items-center">
            <p className="text-xs">see more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 p-0.5 rounded-full bg-yellow-400 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 p-1 border-2 rounded-sm"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 p-1 border-2 rounded-sm"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={handleFwd}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="row-span-5 gap-x-4 grid grid-cols-7">
        {data.slice(startValue, endValue).map((val, ind) => {
          const i = new Buffer.from(val.cover.data).toString("base64");
          return <LowerMBodyCard val={val} key={ind} immg={i} />;
        })}
      </div>
    </div>
  );
};

export default LowerMBody;
