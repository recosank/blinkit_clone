import React, { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = async () => {
  const data = await axios.get("http://localhost:3000/api/users");
  console.log("figkgkg");
  console.log(data);
  return data.data;
};

const Users = () => {
  const { data, error, mutate } = useSWR("api/users", fetcher);
  mutate();
  const hc = async () => {
    const tt = await axios.get("http://localhost:3000/api/tt");
    console.log(tt);

    return tt;
  };
  if (error) {
    return <div>{error}</div>;
  }
  if (!data) {
    return <div>oading ...</div>;
  }
  return (
    <div>
      <p>{data.username}</p>
      {console.log(data.username)}
      <button onClick={hc}>asdfasdfasdfasdfasd</button>
    </div>
  );
};

export default Users;
