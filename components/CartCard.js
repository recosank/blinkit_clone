import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addCartaction, remCartaction } from "../redux/actions";

const CartCard = ({ val, immg }) => {
  //const { cart } = useSelector((state) => state.userReducer);
  //const cartInd = cart.findIndex((i) => i._id === val._id);
  //let init = cartInd >= 0 ? cart[cartInd].order : 0;
  let init = val ? val.order : 0;
  const [first, setfirst] = useState(init);
  const dispatch = useDispatch();
  const addCart = (e) => {
    e.preventDefault();
    setfirst((prev) => prev + 1);
    val.order = first + 1;
    dispatch(addCartaction(val));
  };
  const subCart = (e) => {
    e.preventDefault();
    setfirst((prev) => prev - 1);
    val.order -= 1;
    dispatch(remCartaction(val));
  };
  return (
    <div className="flex">
      <div>
        <Image
          src={`data:image/png;base64,${immg}`}
          width="100"
          height="100"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col p-2 flex-grow justify-around items-start">
        <p className="text-gray-600 text-sm">{val.name}</p>
        <p className="text-xs text-gray-400">{val.amount}</p>
        <div className="flex justify-between w-5/6 items-center">
          <p className="text-sm">
            {val.discountPrice.toFixed(2)}
            <span className="text-xs ml-1 text-slate-400 line-through">
              {val.price}
            </span>
          </p>

          <div className="w-1/3">
            {first === 0 ? (
              <div
                className="flex justify-center rounded-md bg-lime-500 p-1 items-center"
                onClick={(e) => addCart(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <button className="text-sm">Add to cart</button>{" "}
              </div>
            ) : (
              <div className="flex justify-around bg-yellow-300 py-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
                <p className="text-sm">{first}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
    </div>
  );
};

export default CartCard;
