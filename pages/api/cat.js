import catagorydb from "./models/catagoryModel";
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
      let cato;
      const formp = new formidable.IncomingForm();
      formp.parse(req, async (err, fields, files) => {
        // if (req.headers.referer === "http://localhost:3000/") {

        const { title, subCato } = fields;
        console.log(subCato);
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
          subCato,
        });
        res.status(200).json("done");
      });
    } catch (error) {
      //} else {
      //    res.status(404).json('not allowed to post')
      //}

      console.log(error);
    }
  } else {
    res.status(404).json("nott allowed");
  }
};
