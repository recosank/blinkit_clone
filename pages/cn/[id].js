import catagorydb from "../api/models/catagoryModel";
import dbConnect from "../../lib/mongodb";
import CatogCard from "../../components/CatogCard";
import { useState } from "react";

export async function getStaticPaths() {
  await dbConnect();
  const products = await catagorydb.find();

  const paths = products.map((product) => {
    return {
      params: { id: product._id.toString() },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  await dbConnect();
  const t = await catagorydb.findById(params.id).exec();
  return {
    props: {
      product: JSON.parse(JSON.stringify(t)),
    },
  };
}
export default ({ product }) => {
  const init = product.subCato.reduce((prev, curr) => {
    return { ...prev, [curr]: false };
  }, {});
  const [first, setfirst] = useState(init);
  const handleCato = (e) => {
    e.preventDefault();
    setfirst({ ...init, [e.target.name]: true });
  };
  console.log(first);
  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full border-b-4 shadow-lg z-80 bg-white p-2 sticky">
        <button className="p-2 mr-2 text-sm text-slate-600 ">
          vegetables & fruits
        </button>
        <button className="p-2 mr-2 text-sm text-slate-600 ">
          dairy, bread & eggs
        </button>
        <button className="p-2 mr-2 text-sm text-slate-600 ">munches</button>
        <button className="p-2 mr-2 text-sm text-slate-600 ">
          cold drinks & juices
        </button>
        <button className="p-2 mr-2 text-sm text-slate-600 ">
          breakfast & instant food
        </button>
        <button className="p-2 mr-2 text-sm text-slate-600 ">
          tea, coffee & health drinks
        </button>
        <button className="p-2 mr-2 text-sm text-slate-600 ">
          bakery & biscuits
        </button>
        <button className="p-2 mr-2 text-sm text-slate-600 ">more</button>
      </div>
      <div className="flex justify-center h-screen mt-20">
        <div className="grid grid-rows-2 shadow-b-lg w-10/12 grid-cols-5 grid-flow-col border border-t-0 ">
          <div className="border row-span-3 flex flex-col border-t-0">
            {product.subCato.map((val) => {
              return (
                <button
                  name={val}
                  className="text-left p-3 text-sm text-slate-600 border-b"
                  onClick={(e) => handleCato(e)}
                >
                  {val}
                </button>
              );
            })}
          </div>
          <div className="col-span-4 row-span-2 overflow-y-auto">
            <div className="flex justify-between border border-t-0 p-4">
              <p className="text-md font-bold">{product.title}</p>
              <div className="flex  w-56 justify-between items-center">
                <p className="text-xs text-slate-400">Sort by</p>
                <button className="border p-1 w-44 flex items-center justify-between">
                  <p className="text-xs text-lime-600">Relevence</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 scroll-ml-6 overflow-hidden">
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
