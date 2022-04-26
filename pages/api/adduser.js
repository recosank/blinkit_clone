import cookie from "cookie";
import userDatadb from "./models/userModel";
import dbConnect from "../../lib/mongodb";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import formidable from "formidable";
import path from "path";
import fs from "fs";

const SECRET =
  "asjkdfa5s4df658ar64f3a54f5425253456544@#%@%^%$^!#$%@#zbsdfbsdfbdsafgb3847tw4y8hgf";

export const config = {
  api: {
    bodyParser: false,
  },
};

const py = async (req, res) => {
  try {
    await dbConnect();
    let user;
    const formp = new formidable.IncomingForm();
    formp.parse(req, async (err, fields, files) => {
      if (req.headers.referer === "http://localhost:3000/signup") {
        const { username, password, confirmPassword } = fields;
        const existedUser = await userDatadb.findOne({ username });
        if (existedUser) {
          return res.status(405).json("user alredy exist");
        }
        if (password !== confirmPassword) {
          return res.status(405).json("password dosen't natch");
        }

        let oldPath = files.img.filepath;
        let newPath =
          path.join(process.env.ROOT, "public") + "/" + files.img.newFilename;

        let rawData = fs.readFileSync(oldPath);
        fs.writeFile(newPath, rawData, function (err) {
          if (err) console.log(err);
        });
        const hasedPasswd = await bcrypt.hash(password, 12);
        user = await userDatadb.create({
          username: username,
          password: hasedPasswd,
          profilePic: {
            data: rawData,
          },
        });
      } else if (req.headers.referer === "http://localhost:3000/login") {
        const { username, password } = fields;
        user = await userDatadb.findOne({ username });
        if (!user) {
          return res.status(404).json("username does not exist");
        }
        const hasedPasswd = await bcrypt.compare(password, user.password);
        if (!hasedPasswd)
          return res.status(400).json({ message: "invalid credentials" });
      }
      const token = jwt.sign({ name: user.username, _id: user._id }, SECRET, {
        expiresIn: "8h",
      });
      const newuser = {
        username: user.username,
        id: user._id,
      };
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
          httpOnly: true,
        })
      );
      return res
        .status(200)
        .json({ data: newuser, message: "user created successfuly" });
    });
  } catch (error) {
    console.log(error);
  }
};

export default py;
