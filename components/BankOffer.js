import React from "react";
import BankOfferCard from "./BankOfferCard";

const BankOffer = () => {
  return (
    <div className="w-2/3 h-32 flex flex-col  mt-9">
      <p className="text-sm font-bold">bank & wallet offers</p>
      <div className="flex justify-between flex-grow items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 p-1 border-2 rounded-sm"
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
        <BankOfferCard />
        <BankOfferCard />
        <BankOfferCard />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 p-1 border-2 rounded-sm"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default BankOffer;
