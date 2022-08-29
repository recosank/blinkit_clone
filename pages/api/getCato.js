import dbConnect from "../../lib/mongodb";
import catagorydb from "./models/catagoryModel";

export default async (req, res) => {
  await dbConnect();
  const data = catagorydb.find({});
};
