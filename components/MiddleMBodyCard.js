import React from "react";
import Image from "next/image";

const MiddleMBodyCard = ({ immg, val }) => {
  return (
    <div className="flex w-1/4 ">
      <Image
        src={`data:image/png;base64,${immg}`}
        width={300}
        height={180}
        className="z-0 absolute rounded-lg"
      />
    </div>
  );
};

export default MiddleMBodyCard;
