import userDatadb from "./models/userModel";
import dbConnect from "../../lib/mongodb";

export default async (req, res) => {
  await dbConnect();
  const id = "625bed561550106333a63fc2";
  const data = await userDatadb.findById(id);
  console.log(data);
  res.status(200).json(data);
};
