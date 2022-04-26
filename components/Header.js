import Image from "next/image";
import Blinkit_logo from "../public/Images/Blinkit_logo.png";
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = ({ user }) => {
  const { tot, cart } = useSelector((state) => state.userReducer);
  const cartLen = cart.length;
  const [loctModal, setlocModal] = useState(false);
  const [userModal, setuserModal] = useState(false);
  const handleUserModal = (e) => {
    e.preventDefault();
    setuserModal((prev) => !prev);
  };
  const handleLocModal = (e) => {
    e.preventDefault();
    setlocModal((prev) => !prev);
  };
  return (
    <div className="flex justify-around bg-yellow-400 border-b-2 w-full pl-2 h-12 border-black-600 items-center">
      <Image src={Blinkit_logo} width={120} objectFit="contain" />
      <div className="flex justify-center items-center">
        <div
          className={
            loctModal
              ? "block absolute ml-52 mt-48 w-96 h-32 flex flex-col justify-evenly items-start z-40 border-4 bg-white"
              : "hidden"
          }
        >
          <p className="text-xs text-zinc-500 ml-4">
            welcome to <span className="text-xs text-black">blinkit</span>
          </p>
          <div className="flex justify-evenly ml-2 w-64 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-9 m-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="font-serif w-48 font-thin text-xs">
              Please provide your delivery location to see products at nearby
              store
            </p>
          </div>
          <div className="flex justify-around  w-full items-center">
            <button className="bg-lime-600 text-xs p-1 text-white">
              Detect my location
            </button>
            <p className="text-xs p-1 rounded-full">OR</p>
            <button className="border-2 text-xs  p-1">
              Type your society/colony/
            </button>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="text-xs text-zinc-500">delivery in 10 minutes</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={(e) => handleLocModal(e)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="flex border-2 border-black-600 rounded-md h-8 bg-white items-center w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 p-1 pr-2 w-7 rounded-lg text-gray-500 hover:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="pl-2 w-5/6 text-sm active:outline-none"
          type="text"
          placeholder="search stuff"
        />
      </div>

      <div className="text-md tracking-wide">
        {user ? (
          <div className="flex items-center justify-center">
            <p className="text-md tracking-wide">{user.username}</p>
            {userModal ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={(e) => handleUserModal(e)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={(e) => handleUserModal(e)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        ) : (
          <Link href="/login">
            <a className="text-md tracking-wide">login</a>
          </Link>
        )}
        <div
          className={
            userModal
              ? "block absolute h-36 ml-2 p-4 flex flex-col justify-start z-50 border-2 bg-white"
              : "hidden"
          }
        >
          <p className="text-xs text-md tracking-wide text-black text-bold">
            <Link href="/login">
              <a className=" ">logout</a>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center bg-lime-600 rounded-lg p-2 hover:bg-lime-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-6 text-white"
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
        <p
          className={`text-xs pr-1 ${
            cartLen ? "border-r-2" : null
          } text-white `}
        >
          {cartLen ? `${cartLen} items` : null}
        </p>
        <p className="text-xs pl-1 text-white">{tot ? `${tot}$` : "my cart"}</p>
      </div>
      <div className="flex items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <p className="text-xs">get the app</p>
      </div>
    </div>
  );
};

export default Header;
//<svg
//  xmlns="http://www.w3.org/2000/svg"
//  className="h-6 w-6"
//  fill="none"
//  viewBox="0 0 24 24"
//  stroke="currentColor"
//  strokeWidth={2}
//>
//  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
//</svg>;
