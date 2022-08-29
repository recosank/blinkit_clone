import dbConnect from "../../lib/mongodb";
import itemsdb from "./models/itemModel";
import formidable from "formidable";
import path from "path";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      await dbConnect();
      let item;
      const formP = new formidable.IncomingForm();
      formP.parse(req, async (err, fields, files) => {
        const { name, amount, price, discount, brand, cato } = fields;
        let oldPath = files.cover.filepath;
        let newPath =
          path.join(process.env.ROOT, "public") + "/" + files.cover.newFilename;
        let rawData = fs.readFileSync(oldPath);
        fs.writeFile(newPath, rawData, function (err) {
          if (err) console.log(err);
        });
        item = await itemsdb.create({
          name,
          cover: {
            data: rawData,
          },
          amount,
          price,
          brand,
          discount,
          cato,
        });
        res.status(200).json("item added");
      });
    } catch (error) {
      res
        .status(404)
        .json(
          "something went wrong plese check your information and try again"
        );
    }
  } else {
    res.status(405).json("request method not allowed");
  }
};
