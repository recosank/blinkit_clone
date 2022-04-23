import catagorydb from "./models/catagoryModel";
import dbConnect from "../../lib/mongodb";

export default async (req, res) => {
  await dbConnect();
  const data = catagorydb.find({});
};
