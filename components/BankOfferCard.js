import React from "react";
import Image from "next/image";
import bnk from "../public/Images/bnk.png";

const BankOfferCard = () => {
  return (
    <div className="flex border-2 border-neutral-900 rounded-md w-1/4">
      <div className="bg-neutral-800 w-3/5 rounded-l-md p-2">
        <p className="text-sm text-white font-semibold tracking-tighter font-mono">
          flat 25% off
        </p>
        <p className="text-xs text-white">min txn: $99</p>
        <p className="text-xs text-white">Code: ONECARD</p>
      </div>
      <div className="flex flex-grow justify-center">
        <Image src={bnk} width={70} height={70} className="object-contain" />
      </div>
    </div>
  );
};

export default BankOfferCard;
