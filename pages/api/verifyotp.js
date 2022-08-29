import crypto from "crypto";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import userDatadb from "./models/userModel";

const key = process.env.OTP_SECRET;

const SECRET = process.env.JWT_SECRET;

function verifyOTP(phone, hash, otp) {
  let [hashValue, expires] = hash.split(".");

  let now = Date.now();
  if (now > parseInt(expires)) return false;

  let data = `${phone}.${otp}.${expires}`;
  let newCalculatedHash = crypto
    .createHmac("sha256", key)
    .update(data)
    .digest("hex");

  if (newCalculatedHash === hashValue) {
    return true;
  }
  return false;
}

export default async (req, res) => {
  const { phone, otp, hash } = req.body;
  if (req.method === "POST") {
    try {
      const varified = verifyOTP(phone, hash, otp);
      if (varified) {
        let user = await userDatadb.create({
          phone: phone,
        });
        const token = jwt.sign({ phone: user._id, phone: user.phone }, SECRET, {
          expiresIn: "8h",
        });
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
            httpOnly: true,
          })
        );
        res.status(200).json("user created successfully");
      } else {
        res.status(400).json("otp is not correct");
      }
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
