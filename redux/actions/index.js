import axios from "axios";

export const addCartaction = (cartData) => async (dispatch) => {
  console.log(cartData);
  const data = axios
    .patch("http://localhost:3000/api/updateCart", cartData)
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
  dispatch({ type: "addCart", payload: cartData });
};
export const remCartaction = (cartData) => async (dispatch) => {
  console.log(cartData);
  console.log("remcart");
  const data = axios
    .put("http://localhost:3000/api/updateCart", cartData)
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
  dispatch({ type: "remCart", payload: cartData });
};
export const cartPaction = (cartData) => async (dispatch) => {
  console.log(cartData);
  dispatch({ type: "populateCart", payload: cartData });
};
