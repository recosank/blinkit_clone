import itemsdb from "./models/itemModel";
import dbConnect from "../../lib/mongodb";
import formidable from "formidable";
import path from "path";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  console.log(req.method);
  if (req.method === "POST") {
    try {
      await dbConnect();
      let item;
      const formp = new formidable.IncomingForm();
      formp.parse(req, async (err, fields, files) => {
        const { name, amount, price, discount, brand, cato } = fields;
        let oldPath = files.cover.filepath;
        let newPath =
          path.join(process.env.ROOT, "public") + "/" + files.cover.newFilename;
        let rawData = fs.readFileSync(oldPath);
        fs.writeFile(newPath, rawData, function (err) {
          if (err) console.log(err);
        });
        item = await itemsdb.create({
          name: name,
          cover: {
            data: rawData,
          },
          amount: amount,
          price: price,
          brand: brand,
          discount,
          cato,
        });
        res.status(200).json("done");
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).json("nott allowed");
  }
};
