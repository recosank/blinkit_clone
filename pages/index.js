import dbConnect from "../lib/mongodb";
import catagorydb from "./api/models/catagoryModel";
import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import UpperMBody from "../components/UpperMBody";
import MiddleMBody from "../components/MiddleMBody";
import MiddleBanner from "../components/MiddleBanner";
import LowerMBody from "../components/LowerMBody";
import BankOffer from "../components/BankOffer";
import Bottom from "../components/Bottom";

export default function Home({ tt }) {
  //const [locModal, setlocModal] = useState(false);
  //const handleLocModal = () => {
  //  console.log("here im");
  //  setlocModal((prev) => !prev);
  //};

  return (
    <div className="block absolute w-full">
      <Head>
        <title>Blinkit</title>
      </Head>
      <main>
        <Header />

        <div className="flex flex-col items-center content-center justify-center">
          <Banner />
          <UpperMBody data={tt} />
          <UpperMBody data={tt} />
          <MiddleMBody />
          <MiddleBanner />
          <LowerMBody />
          <LowerMBody />
          <BankOffer />
          <LowerMBody />
          <LowerMBody />
          <LowerMBody />
          <Bottom />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    await dbConnect();
    const data = await catagorydb.find();

    return {
      props: {
        isConnected: true,
        tt: await JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        isConnected: false,
      },
    };
  }
}
//
//export async function getServerSideProps(context) {
//  try {
//    await dbConnect();
//    //const userData = await userDatadb.find();
//    //const main = {
//    //  data: JSON.parse(JSON.stringify(userData)),
//    //};
//    return {
//      props: { isConnected: true },
//    };
//  } catch (e) {
//    console.error(e);
//    return {
//      props: { isConnected: false },
//    };
//  }
//}
// <Image
//   src={`data:image/png;base64,${dataa.data[0].profilePic.data}`}
//   width="200px"
//   height="200px"
// />;
//const hc = () => {
//  const d = { name: "name" };
//  axios
//    .post("http://localhost:3000/api", d)
//    .then((res) => console.log(res))
//    .catch((err) => console.log(err));
//};
//console.log(dataa);
//dataa.data[0].profilePic.data = new Buffer.from(
//  dataa.data[0].profilePic.data
//).toString("base64");
//<div
//  className={
//    locModal
//      ? "block absolute ml-52  w-96 h-32 flex flex-col justify-evenly items-start z-40 border-4 bg-white"
//      : "hidden"
//  }
//>
//  <p className="text-xs text-zinc-500 ml-4">
//    welcome to <span className="text-xs text-black">blinkit</span>
//  </p>
//  <div className="flex justify-evenly ml-2 w-64 items-center">
//    <svg
//      xmlns="http://www.w3.org/2000/svg"
//      className="h-7 w-9 m-2"
//      fill="none"
//      viewBox="0 0 24 24"
//      stroke="currentColor"
//      strokeWidth={2}
//    >
//      <path
//        strokeLinecap="round"
//        strokeLinejoin="round"
//        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//      />
//      <path
//        strokeLinecap="round"
//        strokeLinejoin="round"
//        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//      />
//    </svg>
//    <p className="font-serif w-48 font-thin text-xs">
//      Please provide your delivery location to see products at nearby store
//    </p>
//  </div>
//  <div className="flex justify-around  w-full items-center">
//    <button className="bg-lime-600 text-xs p-1 text-white">
//      Detect my location
//    </button>
//    <p className="text-xs p-1 rounded-full">OR</p>
//    <button className="border-2 text-xs  p-1">Type your society/colony/</button>
//  </div>
//</div>;
