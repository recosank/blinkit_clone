import itemsdb from "../../../api/models/itemModel";
import catagorydb from "../../../api/models/catagoryModel";
import dbConnect from "../../../../lib/mongodb";
import { useState } from "react";
import { useRouter } from "next/router";
import CatogCard from "../../../../components/CatogCard";

export async function getStaticPaths(pr) {
  await dbConnect();
  const products = await catagorydb.find();
  let paths = [];
  const pathss = products.map((pValue) => {
    const tipu = pValue.subCato.map((prod) => {
      paths.push({
        params: { id: prod, cnid: pValue._id.toString() },
      });
    });
    //for (let i = 0; i < tipu.length; i++) {
    //  return tipu[i];
    //}
  });
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  await dbConnect();
  const catogData = await catagorydb.find();
  const currentCatogData = await catagorydb.findById(params.cnid);
  const itemData = await itemsdb.find({ subCato: params.id }).exec();
  return {
    props: {
      product: JSON.parse(JSON.stringify(itemData)),
      catog: JSON.parse(JSON.stringify(catogData)),
      currentCatog: JSON.parse(JSON.stringify(currentCatogData)),
    },
  };
}
export default ({ product, catog, currentCatog }) => {
  const router = useRouter();
  let init = router.query.id;
  const handleCato = (e) => {
    e.preventDefault();
    router.push(`${e.target.name}`);
  };
  const handleCatog = (data) => {
    router.push(`/cn/${data._id}/itc/${data.subCato[0]}`);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full border-b-4 shadow-lg z-80 bg-white p-2 sticky">
        {catog.slice(0, 7).map((val, ind) => {
          return (
            <button
              className="p-2 mr-2 text-sm text-slate-600 "
              key={ind}
              onClick={(e) => handleCatog(val)}
            >
              {val.title}
            </button>
          );
        })}
        <button className="p-2 mr-2 text-sm text-slate-600 ">more</button>
      </div>

      <div className="container mx-auto w-5/6 flex justify-center h-screen mt-7">
        <div className="grid grid-rows-2 shadow-b-lg w-10/12 grid-cols-5 grid-flow-col border border-t-0 ">
          <div className="border row-span-3 flex flex-col border-t-0">
            {currentCatog.subCato.map((val, ind) => {
              return (
                <button
                  key={ind}
                  name={val}
                  className={`text-left p-3 text-sm text-slate-800 ${
                    init == val && "bg-slate-100  border-l-4 border-l-lime-600"
                  } border-b`}
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
              {product
                .filter((val) => val.subCato == init)
                .map((itm, ind) => {
                  const i = new Buffer.from(itm.cover.data).toString("base64");
                  return <CatogCard data={itm} key={ind} immg={i} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
