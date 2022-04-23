import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const init = { username: "", password: "" };
  const [uInfo, setuInfo] = useState(init);
  const router = useRouter();
  const chgUserData = (e) => {
    e.preventDefault();
    setuInfo({ ...uInfo, [e.target.name]: e.target.value });
  };
  const handleaccount = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/adduser", uInfo)
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
      <form onSubmit={handleaccount}>
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
        <button type="submit">boooom !!!</button>
      </form>
    </div>
  );
};

export default Login;
