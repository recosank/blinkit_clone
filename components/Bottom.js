import React from "react";
import Image from "next/image";
import blink from "../public/Images/blink.png";
import blin from "../public/Images/blin.jpg";

const Bottom = () => {
  return (
    <div className="flex w-2/3 justify-center mt-7 ">
      <div className="flex w-96">
        <div className="absolute z-0">
          <Image src={blin} width={300} height={550} className="z-0" />
        </div>
        <div className="absolute ml-40 z-10">
          <Image
            src={blink}
            width={300}
            height={600}
            className="absolute z-10"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Bottom;
