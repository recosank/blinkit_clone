import dbConnect from "../../lib/mongodb";
import catagorydb from "./models/catagoryModel";
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
      let cato;
      const formP = new formidable.IncomingForm();
      formP.parse(req, async (err, fields, files) => {
        // if (req.headers.referer === "http://localhost:3000/") {
        const { title, subCato } = fields;
        const arr = subCato.split(",");
        let oldPath = files.cover.filepath;

        let newPath =
          path.join(process.env.ROOT, "public") + "/" + files.cover.newFilename;

        let rawData = fs.readFileSync(oldPath);

        fs.writeFile(newPath, rawData, function (err) {
          if (err) console.log(err);
        });
        cato = await catagorydb.create({
          title: title,
          cover: {
            data: rawData,
          },
          subCato: arr,
        });
        res.status(200).json("catogary added successfully");
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
