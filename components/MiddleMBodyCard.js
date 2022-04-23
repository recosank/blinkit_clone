import React from "react";
import Image from "next/image";

const MiddleMBodyCard = ({ imm }) => {
  return (
    <div className="flex w-1/4">
      <Image
        src={imm}
        width={300}
        height={180}
        className="z-0 absolute rounded-lg"
      />
    </div>
  );
};

export default MiddleMBodyCard;

//<div className="flex flex-col ml-2 mt-1 h-36 z-10 w-24 absolute">
//  <p className="text-white leading-5">stationary & games store</p>
//  <p className="text-xs text-white mt-1">let there be fun and creativity!</p>
//  <button className="bg-white text-xs w-16 mt-4"> check it out</button>
//</div>;
