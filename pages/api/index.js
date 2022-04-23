import cookie from "cookie";
export default (req, res) => {
  //console.log(req.headers.referer);
  //console.log(req.params);
  //console.log(req.url);
  //console.log(req.headers.cookie);

  //const t = JSON.parse(req.cookie);
  //console.log(t);
  res.status(200).json("Succesfull");
};
