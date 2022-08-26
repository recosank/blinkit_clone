import itemsdb from "../api/models/itemModel";
import dbConnect from "../../lib/mongodb";
import { useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";

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
  console.log(product);
  return (
    <div>
      <Header />
      <div className="container flex  border-2 mt-4 mx-auto w-2/3">
        <div className="flex flex-col h-96 border w-1/2">
          <Image src={`data:image/png;base64,${pic}`} width={45} height={350} />
        </div>
        <div className="border w-1/2 p-12">
          <p className="text-2xl font-light tracking-wide ">{product.name}</p>
        </div>
      </div>
    </div>
  );
};
