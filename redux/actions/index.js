import axios from "axios";

export const addCartaction = (cartData) => async (dispatch) => {
  const data = axios
    .patch("http://localhost:3000/api/updateCart", cartData)
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
  dispatch({ type: "addCart", payload: cartData });
};
export const remCartaction = (cartData) => async (dispatch) => {
  const data = axios
    .patch("http://localhost:3000/api/updateCart", cartData)
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
  dispatch({ type: "remCart", payload: cartData });
};
export const cartPaction = (cartData) => async (dispatch) => {
  dispatch({ type: "populateCart", payload: cartData });
};
