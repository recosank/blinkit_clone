import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUseraction } from "../redux/actions";
import Blinkit_logo from "../public/Images/Blinkit_logo.png";
import CartHeader from "./CartHeader";

const Header = ({ user }) => {
  const { tot, cart, Userphone } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const cartLen = cart.length;
  const [phone, setphone] = useState("");
  const [hash, sethash] = useState("");
  const [loctModal, setlocModal] = useState(false);
  const [userModal, setuserModal] = useState(false);
  const [openCart, setopenCart] = useState(false);
  const [openLogin, setopenLogin] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [openOtp, setopenOtp] = useState(false);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleUserModal = (e) => {
    e.preventDefault();
    setuserModal((prev) => !prev);
  };

  const handleLocModal = (e) => {
    e.preventDefault();
    setlocModal((prev) => !prev);
  };
  const cartOpen = (e) => {
    e.preventDefault();
    setopenCart(true);
  };
  const cartClose = (e) => {
    e.preventDefault();
    setopenCart(false);
  };
  const handleLogin = () => {
    setopenLogin(true);
  };
  const handleOtp = () => {
    axios
      .post("http://localhost:3000/api/getotp", { number: phone })
      .then((res) => {
        if (res.status == 200) {
          sethash(res.data.fullHash);
          setopenOtp(true);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleVerifyOtp = () => {
    const data = {
      hash,
      otp: otp.join(""),
      phone,
    };
    dispatch(addUseraction(data));
  };

  return (
    <div className="flex justify-around bg-yellow-400 border-b-2 w-full pl-5 h-14 border-black-600 items-center">
      <Image src={Blinkit_logo} width={120} objectFit="contain" />
      <div className="flex justify-center items-center">
        <div
          className={
            loctModal
              ? "block absolute ml-52 mt-48 w-96 h-36 flex flex-col justify-evenly items-start z-40 border-4 bg-white"
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
            <input
              className="border border-black text-xs p-1"
              placeholder="Type your society/colony/"
            />
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
      <div className="flex border-2 border-black-600 rounded-lg h-9 bg-white items-center w-1/2">
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
          placeholder="search"
        />
      </div>

      <div className="text-md tracking-wide">
        {Userphone.length > 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-md tracking-wide">Account</p>
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
          <>
            <button
              className="text-lg tracking-wide subpixel-antialiased"
              onClick={handleLogin}
            >
              Login
            </button>
            {openLogin && (
              <div
                className="flex absolute inset-0 z-40 justify-center items-center align-center w-full h-screen"
                style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
              >
                <div
                  className="bg-white h-96 "
                  style={{ top: "22rem", left: "40rem", width: "30%" }}
                >
                  <div className="h-1/4 flex justify-center items-center bg-white subpixel-antialiased text-gray-500 text-xl font-thinner text-center p-7">
                    {
                      openOtp
                      //<p
                      //  onClick={(e) => setopenOtp(false)}
                      //  className="absolute justify-center items-center mb-12 left-800 flex text-sm mb-22 text-lime-400   "
                      //>
                      //  <svg
                      //    xmlns="http://www.w3.org/2000/svg"
                      //    fill="none"
                      //    viewBox="0 0 24 24"
                      //    strokeWidth={1.5}
                      //    stroke="currentColor"
                      //    className="w-6 h-4"
                      //  >
                      //    <path
                      //      strokeLinecap="round"
                      //      strokeLinejoin="round"
                      //      d="M15.75 19.5L8.25 12l7.5-7.5"
                      //    />
                      //  </svg>
                      //  Back
                      //</p>
                    }
                    <p className="">Phone Number Verification</p>
                  </div>
                  <div
                    className="flex justify-center rounded-tr-xl items-center align-center flex-col pt-10 bg-purple-50 h-3/4 mr-6 text-center"
                    style={{ width: "95%" }}
                  >
                    <p className="w-2/4 subpixel-antialiased">
                      {openOtp ? (
                        <>
                          Enter 4 digit code sent to your phone
                          <span> +91-{phone}</span>
                        </>
                      ) : (
                        "Enter your phone number to Login/Sign up"
                      )}
                    </p>
                    {!openOtp ? (
                      <div className="flex space-x-2 w-3/5 mt-9 mb-5 border bg-white p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-6"
                        >
                          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                          <path
                            fillRule="evenodd"
                            d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm">+91-</p>
                        <input
                          type="text"
                          pattern="[0-9]"
                          value={phone}
                          onChange={(e) => {
                            setphone(e.target.value);
                          }}
                          className="text-sm spin-button-none"
                        />
                      </div>
                    ) : (
                      <div className="flex space-x-5 h-12 w-3/5 mt-9 px-4 mb-5">
                        {otp.map((data, index) => {
                          return (
                            <input
                              className="w-1/4 border-2 text-center bg-white"
                              type="text"
                              name="otp"
                              maxLength="1"
                              key={index}
                              value={data}
                              onChange={(e) => handleChange(e.target, index)}
                              onFocus={(e) => e.target.select()}
                            />
                          );
                        })}
                      </div>
                    )}

                    {!openOtp ? (
                      <button
                        className="w-3/5 py-2 bg-purple-200 text-white font-semibold"
                        onClick={handleOtp}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        className="w-3/5 py-2 bg-purple-200 text-white font-semibold"
                        onClick={handleVerifyOtp}
                      >
                        Confirm
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div
          className={
            userModal
              ? "absolute h-36 ml-2 w-24 flex flex-col justify-start pl-5 pt-3 space-y-2 font-medium rounded-lg z-50 bg-yellow-200"
              : "hidden"
          }
        >
          <p className="text-sm text-md tracking-wide text-black">
            <Link href="/login">
              <a className=" ">Profile</a>
            </Link>
          </p>
          <p className="text-sm text-md tracking-wide text-black">
            <Link href="/login">
              <a className=" ">Settings</a>
            </Link>
          </p>
          <p className="text-sm text-md tracking-wide text-black">
            <Link href="/login">
              <a className=" ">Logout</a>
            </Link>
          </p>
        </div>
      </div>

      <div
        className="flex justify-center items-center bg-lime-600 rounded-lg p-2 hover:bg-lime-500"
        onClick={cartOpen}
      >
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
        <p className="text-xs pl-1 text-white">
          {tot ? `${tot.toFixed(2)}$` : "my cart"}
        </p>
      </div>
      {openCart && (
        <div
          className={`h-screen w-1/4 right-0  top-1 border absolute flex flex-col bg-white z-30`}
        >
          <CartHeader items={cart} close={cartClose} tot={tot} />
        </div>
      )}

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
