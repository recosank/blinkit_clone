import Image from "next/image";
import straw from "../public/Images/straw.jpg";

const UpperMBodyCard = ({ val, immg }) => {
  return (
    <div className="h-32 rounded-lg w-16 ">
      <Image
        src={`data:image/png;base64,${immg}`}
        className="object-contain"
        width={110}
        height={120}
      />
      <p className="text-xs text-center">{val.title}</p>
    </div>
  );
};

export default UpperMBodyCard;
