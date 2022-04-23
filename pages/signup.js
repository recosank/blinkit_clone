import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  const init = { username: "", password: "", confirmPassword: "", img: "" };
  const [uInfo, setuInfo] = useState(init);
  const router = useRouter();

  const chgUserData = (e) => {
    e.preventDefault();
    setuInfo({ ...uInfo, [e.target.name]: e.target.value });
  };
  const oo = (e) => {
    console.log(e.target.files[0]);
    setuInfo({ ...uInfo, img: e.target.files[0] });
  };
  const handleaccount = (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("username", uInfo.username);
    body.append("img", uInfo.img);
    body.append("password", uInfo.password);
    body.append("confirmPassword", uInfo.confirmPassword);
    axios
      .post("http://localhost:3000/api/adduser", body)
      .then((res) => {
        if (res.status == 200) {
          console.log("here");
          localStorage.setItem("blinkitUser", JSON.stringify(res.data));
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(uInfo);
  return (
    <div>
      <form
        action="/api/adduser"
        encType="multipart/form-data"
        method="POST"
        onSubmit={handleaccount}
      >
        <input
          type="text"
          placeholder="username"
          value={uInfo.username}
          onChange={(e) => chgUserData(e)}
          name="username"
        />
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={uInfo.password}
          onChange={(e) => chgUserData(e)}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={uInfo.confirmPassword}
          onChange={(e) => chgUserData(e)}
        />
        <input type="file" name="img" onChange={oo} />
        <button type="submit">boooom !!!</button>
      </form>
    </div>
  );
};

export default Signup;
