import Head from "next/head";
import { useState, useEffect } from "react";
import dbConnect from "../lib/mongodb";
import catagorydb from "./api/models/catagoryModel";
import discountdb from "./api/models/discountModel";
import itemsdb from "./api/models/itemModel";
import userModel from "./api/models/userModel";
import Banner from "../components/Banner";
import Header from "../components/Header";
import UpperMBody from "../components/UpperMBody";
import MiddleMBody from "../components/MiddleMBody";
import MiddleBanner from "../components/MiddleBanner";
import LowerMBody from "../components/LowerMBody";
import BankOffer from "../components/BankOffer";
import Bottom from "../components/Bottom";
import auth from "../middleware/auth";

import { useDispatch, useSelector } from "react-redux";
import { cartPaction } from "../redux/actions";

export default function Home({ catogData, fData, cData, uInfo, tDiscount }) {
  const dispatch = useDispatch();
  const { Userphone } = useSelector((state) => state.userReducer);
  useEffect(() => {
    uInfo ? dispatch(cartPaction(uInfo.cart)) : null;
  }, [uInfo]);
  return (
    <div className="block absolute w-full">
      <Head>
        <title>Blinkit</title>
      </Head>
      <main>
        <Header />
        <div
          className={`flex flex-col items-center content-center justify-center space-y-9`}
        >
          <Banner />
          <MiddleMBody data={tDiscount} />
          <UpperMBody data={catogData} />
          <UpperMBody data={catogData} />
          <MiddleBanner />
          <LowerMBody
            title="fruits & vegetables"
            titleTwo="eat fresh, stay healthy"
            data={fData}
          />
          <LowerMBody
            title="chemist store"
            titleTwo="get pain relievers, dettol and more"
            data={cData}
          />
          <BankOffer />
          <LowerMBody
            title="fruits & vegetables"
            titleTwo="eat fresh, stay healthy"
            data={fData}
          />
          <LowerMBody
            title="chemist store"
            titleTwo="get pain relievers, dettol and more"
            data={cData}
          />
          <LowerMBody
            title="fruits & vegetables"
            titleTwo="eat fresh, stay healthy"
            data={fData}
          />
          <Bottom />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    auth(context.req, context.res);
    const { userId } = context.req;
    await dbConnect();
    let userInfo;
    userId ? (userInfo = await userModel.findById(userId)) : (userInfo = null);

    const data = await catagorydb.find();
    const fruitData = await itemsdb
      .find({ cato: "fruits & vegetables" })
      .exec();

    const chemistData = await itemsdb.find({ cato: "chemist store" }).exec();
    const todayDiscount = await discountdb.find();
    return {
      props: {
        isConnected: true,
        catogData: await JSON.parse(JSON.stringify(data)),
        fData: await JSON.parse(JSON.stringify(fruitData)),
        cData: await JSON.parse(JSON.stringify(chemistData)),
        tDiscount: await JSON.parse(JSON.stringify(todayDiscount)),
        uInfo: await JSON.parse(JSON.stringify(userInfo)),
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
