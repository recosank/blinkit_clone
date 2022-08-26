import dbConnect from "../../lib/mongodb";
import otpGenerator from "otp-generator";
import crypto from "crypto";

const key = "verysecretkey"; // Key for cryptograpy.

function createNewOTP(phone) {
  const otp = otpGenerator.generate(4, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  const ttl = 5 * 60 * 1000; //5 Minutes in miliseconds
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const hash = crypto.createHmac("sha256", key).update(data).digest("hex");
  const fullHash = `${hash}.${expires}`;
  const otpData = { fullHash, otp };
  return otpData;
}

export default async (req, res) => {
  console.log(req);
  if (req.method === "POST") {
    try {
      const { number } = req.body;
      console.log(number);
      const { otp, fullHash } = createNewOTP(number);
      res.status(200).json({ number: number, otp, fullHash });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).json("not allowed");
  }
};
