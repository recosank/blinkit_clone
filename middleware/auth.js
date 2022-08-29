import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

const auth = (req, res) => {
  try {
    const token = req.cookies.token;
    const isCustomAuth = token.length < 500;
    let decodedData;
    decodedData = jwt.verify(token, SECRET);
    req.userId = decodedData._id;
  } catch (error) {
    console.log(error);
  }
};

export default auth;
