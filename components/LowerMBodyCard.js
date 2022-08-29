import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addCartaction, remCartaction } from "../redux/actions";

const LowerMBodyCard = ({ val, immg }) => {
  const router = useRouter();
  let { cart } = useSelector((state) => state.userReducer);
  const cartInd = cart.findIndex((i) => i._id === val._id);
  let init = cartInd >= 0 ? cart[cartInd].order : 0;
  const [first, setfirst] = useState(init);
  const dispatch = useDispatch();
  const percentage = (partialValue, totalValue) => {
    const perc = (partialValue / 100) * totalValue;
    return Number(perc).toFixed(2);
  };
  const disc = val.discount > 0 && percentage(val.discount, val.price);
  val.discountPrice = val.price - disc;
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
    <div className="flex flex-col mt-2">
      <div
        className="border-2 flex rounded-md"
        onClick={(e) => router.push(`prid/${val._id}`)}
      >
        <Image
          src={`data:image/png;base64,${immg}`}
          width={150}
          height={140}
          className="object-contain absolute z-0"
        />
        <button
          className={
            val.discount <= 0
              ? "hidden"
              : "absolute z-10 w-9 text-xs bg-lime-400 rounded-tl-md"
          }
        >
          {val.discount}% OFF
        </button>
      </div>
      <div className="flex flex-col ml-2 justify-between flex-grow pb-3 content-around space-y-2">
        <p className="text-sm h-11">{val.name}</p>
        <p className="text-xs text-slate-600">{val.amount}</p>
        <p className="text-xs text-slate-600">
          By <span className="text-xs text-lime-800">{val.brand} </span>
        </p>
        <p className="text-sm text-lime-700">
          {disc > 0 ? (
            <>
              ${val.discountPrice.toFixed(2)}
              <span
                className={
                  val.price <= 0
                    ? "hidden"
                    : "text-xs text-slate-600 p-1 line-through"
                }
              >
                ${val.price}
              </span>
            </>
          ) : (
            <>${val.price}</>
          )}
        </p>
      </div>
      <div>
        {first == 0 ? (
          <div
            className="flex justify-center bg-lime-500 p-1 items-center"
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
          <div className="flex justify-around bg-yellow-300 p-1 items-center">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default LowerMBodyCard;
