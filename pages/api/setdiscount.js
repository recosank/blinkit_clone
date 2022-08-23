import discountdb from "./models/discountModel";
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
  if (req.method === "POST") {
    try {
      await dbConnect();
      let disc;
      const formp = new formidable.IncomingForm();
      formp.parse(req, async (err, fields, files) => {
        console.log(files);
        console.log(fields);
        const { title, cato, discount } = fields;
        const arr = cato.split(",");
        let oldPath = files.cover.filepath;
        let newPath =
          path.join(process.env.ROOT, "public") + "/" + files.cover.newFilename;
        let rawData = fs.readFileSync(oldPath);
        fs.writeFile(newPath, rawData, function (err) {
          if (err) console.log(err);
        });
        disc = await discountdb.create({
          title: title,
          cover: {
            data: rawData,
          },
          cato: arr,
          discount: discount,
        });
        res.status(200).json("discount card added");
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).json("not allowed");
  }
};
