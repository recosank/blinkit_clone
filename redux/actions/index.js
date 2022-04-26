import axios from "axios";

export const nameaction = (cartData) => async (dispatch) => {
  console.log(cartData);
  const data = axios
    .patch("http://localhost:3000/api/updateCart", cartData)
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
  dispatch({ type: "addCart", payload: cartData });
};
export const cartPaction = (cartData) => async (dispatch) => {
  console.log(cartData);
  dispatch({ type: "populateCart", payload: cartData });
};
