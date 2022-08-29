import otpGenerator from "otp-generator";
import crypto from "crypto";

const key = process.env.OTP_SECRET; // Key for cryptograpy.

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
  //here use your sms service to send otp to users mobile number
  const otpData = { fullHash, otp };
  return otpData;
}

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { number } = req.body;
      const { otp, fullHash } = createNewOTP(number);
      res.status(200).json({ number: number, otp, fullHash });
    } catch (error) {
      res
        .status(404)
        .json(
          "something went wrong plese check your information and try again"
        );
    }
  } else {
    res.status(405).json("reqest method not allowed");
  }
};
