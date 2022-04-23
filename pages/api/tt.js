import userDatadb from "./models/userModel";
import dbConnect from "../../lib/mongodb";

export default async (req, res) => {
  console.log("on data");
  await dbConnect();
  const id = "625bed561550106333a63fc2";
  userDatadb.updateOne(
    { _id: id },
    { $set: { username: "fasdfsadfgsdfe" } },
    (err) => {
      console.log(err);
    }
  );

  res.status(200).json("done");
};
