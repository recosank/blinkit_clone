//import catagorydb from "../pages/api/models/catagoryModel";
//import dbConnect from "./mongodb";
//import CatogCard from "../components/CatogCard";
//import { useState } from "react";
//import { useRouter } from "next/router";
//import Header from "../components/Header";
//
//export async function getStaticPaths() {
//  await dbConnect();
//  const products = await catagorydb.find();
//  const paths = products.map((product) => {
//    return {
//      params: { cnid: product._id.toString() },
//    };
//  });
//  console.log(paths);
//  return { paths, fallback: false };
//}
//
//export async function getStaticProps({ params }) {
//  await dbConnect();
//  const catogaryData = await catagorydb.findById(params.cnid).exec();
//  return {
//    props: {
//      product: JSON.parse(JSON.stringify(catogaryData)),
//    },
//  };
//}
//export default ({ product }) => {
//  const router = useRouter();
//  let init = "";
//  const [first, setfirst] = useState(init);
//  const handleCato = (e) => {
//    e.preventDefault();
//    setfirst(e.target.name);
//    router.push(`./itc/${first}`);
//  };
//  return (
//    <div className="flex flex-col">
//      <div className="flex justify-center w-full text-sm border-b-4 shadow-sm z-80 bg-white p-2 sticky">
//        <button className="p-2 mr-2 text-md text-slate-500 ">
//          Vegetables & Fruits
//        </button>
//        <button className="p-2 mr-2 text-slate-600 ">
//          Dairy, Bread & Eggs
//        </button>
//        <button className="p-2 mr-2 text-slate-600 ">Munches</button>
//        <button className="p-2 mr-2 text-slate-600 ">
//          Cold drinks & Juices
//        </button>
//        <button className="p-2 mr-2 text-slate-600 ">
//          Breakfast & Instant Food
//        </button>
//        <button className="p-2 mr-2 text-slate-600 ">
//          Tea, Coffee & Health Drinks
//        </button>
//        <button className="p-2 mr-2 text-slate-600 ">Bakery & Biscuits</button>
//        <button className="p-2 mr-2 text-slate-600 ">More</button>
//      </div>
//      <div className="container mx-auto w-5/6 flex justify-center h-screen mt-7">
//        <div className="grid grid-rows-2 shadow-b-lg w-10/12 grid-cols-5 grid-flow-col border border-t-0 ">
//          <div className="border row-span-3 flex flex-col border-t-0">
//            {product.subCato.map((val, ind) => {
//              return (
//                <button
//                  key={ind}
//                  name={val}
//                  className={`text-left p-3 text-sm text-slate-800 ${
//                    first == val && "bg-slate-100  border-l-4 border-l-lime-600"
//                  } border-b`}
//                  onClick={(e) => handleCato(e)}
//                >
//                  {val}
//                </button>
//              );
//            })}
//          </div>
//          <div className="col-span-4 row-span-2 overflow-y-auto">
//            <div className="flex justify-between border border-t-0 p-4">
//              <p className="text-md font-bold">{product.title}</p>
//              <div className="flex  w-56 justify-between items-center">
//                <p className="text-xs text-slate-400">Sort by</p>
//                <button className="border p-1 w-44 flex items-center justify-between">
//                  <p className="text-xs text-lime-600">Relevence</p>
//                  <svg
//                    xmlns="http://www.w3.org/2000/svg"
//                    className="h-4 w-4"
//                    fill="none"
//                    viewBox="0 0 24 24"
//                    stroke="currentColor"
//                    strokeWidth={2}
//                  >
//                    <path
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      d="M19 9l-7 7-7-7"
//                    />
//                  </svg>
//                </button>
//              </div>
//            </div>
//            <div className="grid grid-cols-4 scroll-ml-6 overflow-hidden">
//              {}
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//};
//
