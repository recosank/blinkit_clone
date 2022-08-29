import { useState } from "react";
import dbConnect from "../../lib/mongodb";
import itemsdb from "../api/models/itemModel";
import Image from "next/image";
import Header from "../../components/Header";
import oxy from "../../public/Images/oxy.png";

export async function getStaticPaths() {
  await dbConnect();
  const products = await itemsdb.find();
  const paths = products.map((product) => {
    return {
      params: { id: product._id.toString() },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  await dbConnect();
  const productData = await itemsdb.findById(params.id).exec();

  return {
    props: {
      product: JSON.parse(JSON.stringify(productData)),
    },
  };
}
export default ({ product }) => {
  const pic = new Buffer.from(product.cover.data).toString("base64");
  const [first, setfirst] = useState(0);
  const percentage = (partialValue, totalValue) => {
    const perc = (partialValue / 100) * totalValue;
    return Number(perc).toFixed(2);
  };
  const disc =
    product.discount > 0 && percentage(product.discount, product.price);
  product.discountPrice = product.price - disc;
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
    <div>
      <Header />
      <div className="container flex mt-4 mx-auto w-2/3">
        <div className="flex flex-col border-r border-b w-1/2">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_479303.jpg"
            style={{ width: "90%", height: "50%" }}
          />
          <div className="border-t space-y-5">
            <h4 className="font-bold text-xl my-5">Product Details</h4>
            <div className="space-y-2 w-4/5">
              <h5 className="text-sm font-semibold">Manufacturer Details</h5>
              <p className="text-sm text-gray-600 ">
                Nureca Limited B2-166, Time Square 7th and 8th Floor, CTS No 349
                and 349-1, Western Express Highway, Andheri East, Mumbai, Mumbai
                City, Maharashtra, 400069
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold">Key Features</h5>
              <p className="text-sm text-gray-600">
                Best pulse oximeter for doctor: The newly upgraded Dr trust
                finger pulse oximeter is an affordable and accurate way to check
                pulse rates and blood oxygen saturation levels.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold">Customer Care Details</h5>
              <p className="text-sm text-gray-600 ">
                Email: info@blinkit.com <br />
                Customer Care Number: 1-800-208-8888
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold">Description</h5>
              <p className="text-sm text-gray-600 w-3/4">
                Doctors choice: measures quickly and accurately pulse rate and
                spo2 blood oxygen saturation of arterial hemoglobin levels.
                Accurately determine your spo2 (blood oxygen saturation levels),
                fast spo2 readings, pulse measurements and display it
                conveniently on a large digital bright led display
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-6 p-12">
          <p className="text-2xl font-light tracking-wide ">{product.name}</p>
          <div className="flex space-x-1 items-center">
            <p className="text-lg text-lime-600">{product.brand}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-4 text-lime-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="border border-lime-200 rounded-xl w-1/4 h-20">
            <div className="flex border-b justify-around items-center h-14">
              <div
                className="rounded-full flex items-center justify-center w-4 p-1 h-4"
                style={{ border: "1px solid rgb(12, 131, 31);" }}
              >
                <div
                  className="rounded-full w-2 h-2"
                  style={{ backgroundColor: "rgb(12, 131, 31)" }}
                ></div>
              </div>
              <div className="">
                <p>{product.amount}</p>
                <p className="text-xs text-black font-thinner">
                  {disc > 0 ? (
                    <>
                      ${product.discountPrice.toFixed(2)}
                      <span
                        className={
                          product.price <= 0
                            ? "hidden"
                            : "text-xs text-slate-600 p-1 line-through"
                        }
                      >
                        ${product.price}
                      </span>
                    </>
                  ) : (
                    <>${product.price}</>
                  )}
                </p>
              </div>
            </div>
            <div className="text-center text-xs text-lime-500 pt-1 h-7">
              {product.discount}% OFF{" "}
            </div>
          </div>
          <div className="mt-12">
            {first == 0 ? (
              <div
                className="bg-lime-100 rounded-md flex justify-center items-center border border-green-800 text-sm w-1/4 h-12"
                onClick={(e) => addCart(e)}
              >
                <button className="text-green-800 font-semibold">ADD</button>
              </div>
            ) : (
              <div className="flex justify-around bg-lime-100 rounded-md border h-12 border-green-800 py-2 w-1/4 items-center">
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
    </div>
  );
};
