import React, { useState } from "react";
import Image from "next/image";

const CatogCard = ({ data, immg }) => {
  const [first, setfirst] = useState(0);
  const percentage = (partialValue, totalValue) => {
    const perc = (partialValue / 100) * totalValue;
    return Number(perc).toFixed(2);
  };
  const disc = data.discount > 0 && percentage(data.discount, data.price);
  data.discountPrice = data.price - disc;
  const addCart = (e) => {
    e.preventDefault();
    setfirst((prev) => prev + 1);
    //val.order = first + 1;
    //dispatch(addCartaction(val));
  };
  const subCart = (e) => {
    e.preventDefault();
    setfirst((prev) => prev - 1);
    //val.order -= 1;
    //dispatch(remCartaction(val));
  };
  return (
    <div className="flex w-56 gap-2 px-3 pb-4 z-20 pl-6 flex-col border">
      <div className="flex justify-center z-20">
        <Image
          src={`data:image/png;base64,${immg}`}
          width="200"
          height="160"
          className="object-contain"
        />
        <button className="absolute text-xs bg-lime-400 p-1 px-3 tracking-wider mr-40 mb-40 rounded-tr-lg rounded-br-lg">
          {data.discount}% OFF
        </button>
      </div>
      <p className="text-sm h-12 text-gray-600 ">{data.name}</p>
      <p className="text-xs text-gray-400">{data.amount}</p>
      <div className="flex justify-between mt-3">
        <div className="">
          <p className="text-sm decoration-solid">
            {disc > 0 ? data.discountPrice.toFixed(2) : data.price}
          </p>
          <p
            className={
              data.discount == 0
                ? "hidden"
                : "text-xs text-slate-600 p-1 line-through"
            }
          >
            ${data.price}
          </p>
        </div>
        <div>
          {first == 0 ? (
            <div
              className="bg-lime-100 rounded-md border border-green-800 text-sm py-2 px-8 items-center"
              onClick={(e) => addCart(e)}
            >
              <button className="text-green-800 font-semibold">ADD</button>
            </div>
          ) : (
            <div className="flex justify-around bg-lime-100 rounded-md border border-green-800 py-2 w-24 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={(e) => addCart(e)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-sm text-green-800">{first}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={(e) => subCart(e)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatogCard;
