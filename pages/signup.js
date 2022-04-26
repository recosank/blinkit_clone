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
    <div className="flex justify-center items-center">
      <form
        action="/api/adduser"
        encType="multipart/form-data"
        className="border-4 mt-20 space-y-4 p-4"
        method="POST"
        onSubmit={handleaccount}
      >
        <div className="flex flex-col">
          <label className="text-xs ">username</label>
          <input
            type="text"
            placeholder="username"
            className="border-2 p-0.5 text-sm"
            value={uInfo.username}
            onChange={(e) => chgUserData(e)}
            name="username"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs ">choose image</label>
          <input
            type="file"
            name="img"
            className="border-2 p-0.5 text-sm"
            onChange={oo}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs ">password</label>
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            className="border-2 p-0.5 text-sm"
            value={uInfo.password}
            onChange={(e) => chgUserData(e)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs ">confirm password</label>
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            className="border-2 p-0.5 text-sm"
            value={uInfo.confirmPassword}
            onChange={(e) => chgUserData(e)}
          />
        </div>

        <button className="border-2 " type="submit">
          boooom !!!
        </button>
      </form>
    </div>
  );
};

export default Signup;
