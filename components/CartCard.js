import Image from "next/image";
import React from "react";
import straw from "../public/Images/straw.jpg";

const CartCard = ({ val }) => {
  return (
    <div className="flex">
      <div>
        <Image
          src={straw}
          width="100"
          height="100"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col p-2  justify-around items-start">
        <p className="text-gray-600 text-sm">{val.name}</p>
        <p className="text-sm">
          {val.newPrice}
          <span className="text-xs text-slate-400">{val.oldPrice}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-400">{val.amount}</p>
          <button className="bg-yellow-500 text-sm">add cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
