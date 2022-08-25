import Image from "next/image";
import { useRouter } from "next/router";

const UpperMBodyCard = ({ val, immg }) => {
  const router = useRouter();
  return (
    <div
      className="h-32 rounded-lg w-16"
      onClick={(e) => router.push(`cn/${val._id}/itc/${val.subCato[0]}`)}
    >
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
