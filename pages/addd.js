import axios from "axios";
import React, { useState } from "react";

const addd = () => {
  const init = { username: "", password: "" };
  const [uInfo, setuInfo] = useState(init);

  const chgUserData = (e) => {
    e.preventDefault();
    setuInfo({ ...uInfo, [e.target.name]: e.target.value });
  };
  const oo = (e) => {
    console.log(e.target.files);
    setuInfo({ ...uInfo, img: e.target.files[0] });
  };
  const handleaccount = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/adddiscount", uInfo)
      .then((res) => {
        if (res.status == 200) {
          console.log("here");
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(uInfo);
  return (
    <div>
      <form onSubmit={handleaccount}>
        <input
          type="file"
          name="img"
          className="border-2 p-0.5 text-sm"
          onChange={oo}
        />
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={uInfo.password}
          onChange={(e) => chgUserData(e)}
        />
        <button type="submit">boooom !!!</button>
      </form>
    </div>
  );
};

export default addd;
