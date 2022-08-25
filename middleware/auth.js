import jwt from "jsonwebtoken";

const SECRET =
  "asjkdfa5s4df658ar64f3a54f5425253456544@#%@%^%$^!#$%@#zbsdfbsdfbdsafgb3847tw4y8hgf";

const auth = (req, res) => {
  try {
    const token = req.cookies.token;
    const isCustomAuth = token.length < 500;
    let decodedData;
    decodedData = jwt.verify(token, SECRET);
    req.userId = decodedData._id;
  } catch (error) {
    console.log(error.name);
    if (error.name === "TypeError") {
      console.log("nope");
    } else {
      console.log(error);
    }
  }
};

export default auth;
