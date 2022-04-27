import { useEffect, useState } from "react";
import CatogCard from "../components/CatogCard";

const Catog = () => {
  const init = {
    Chicken: false,
    Fish: false,
    Exotic: false,
    Eggs: false,
  };
  const [first, setfirst] = useState(init);
  const handleCatog = (e) => {
    e.preventDefault();
    setfirst({ ...init, [e.target.name]: true });
  };
  useEffect(() => {
    setfirst({ ...init, Chicken: true });
  }, []);
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
            <button
              onClick={handleCatog}
              name="Chicken"
              className={`text-left p-3 text-sm text-slate-600 ${
                first.Chicken && "bg-slate-100  border-l-4 border-l-lime-600"
              } border-b`}
            >
              Chicken
            </button>
            <button
              onClick={handleCatog}
              name="Fish"
              className={`text-left p-3 text-sm text-slate-600 ${
                first.Fish && "bg-slate-100  border-l-4 border-l-lime-600"
              } border-b`}
            >
              {" "}
              Fish & Seafood{" "}
            </button>
            <button
              onClick={handleCatog}
              name="Exotic"
              className={`text-left p-3 text-sm text-slate-600 ${
                first.Exotic && "bg-slate-100  border-l-4 border-l-lime-600"
              } border-b`}
            >
              Exotic Meat{" "}
            </button>
            <button
              onClick={handleCatog}
              name="Eggs"
              className={`text-left p-3 text-sm text-slate-600 ${
                first.Eggs && "bg-slate-100  border-l-4 border-l-lime-600"
              } border-b`}
            >
              Eggs
            </button>
          </div>
          <div className="col-span-4 row-span-2 overflow-y-auto">
            <div className="flex justify-between border border-t-0 p-4">
              <p className="text-md font-bold">Chicken, Meat & Fish</p>
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
            {first.Chicken && (
              <div className="grid grid-cols-4 scroll-ml-6 overflow-hidden">
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
              </div>
            )}
            {first.Fish && (
              <div className="grid grid-cols-4">
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
              </div>
            )}
            {first.Exotic && (
              <div className="grid grid-cols-4">
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
              </div>
            )}
            {first.Eggs && (
              <div className="grid grid-cols-4">
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
                <CatogCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catog;
