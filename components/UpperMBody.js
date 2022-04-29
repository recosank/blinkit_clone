import UpperMBodyCard from "./UpperMBodyCard";

const UpperMBody = ({ data }) => {
  return (
    <div className="w-2/3 mt-5 flex justify-between h-32">
      {data.map((val, ind) => {
        const i = new Buffer.from(val.cover.data).toString("base64");
        return <UpperMBodyCard val={val} key={ind} immg={i} />;
      })}
    </div>
  );
};

export default UpperMBody;
