let init = {
  cart: [],
  tot: 0,
};

const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case "populateCart":
      let price = 0;
      payload.map((val) => (price = price + parseInt(val.discountPrice)));
      return {
        cart: payload,
        tot: price,
      };
    case "addCart":
      const ind = state.cart.findIndex((i) => i._id === payload._id);
      if (ind == -1) {
        return {
          ...state,
          cart: [...state.cart, payload],
          tot: state.tot + payload.discountPrice,
        };
      } else {
        state.cart[ind].order = payload.order;
        return { ...state, tot: state.tot + payload.discountPrice };
      }

    case "remCart":
      const data = state.cart.findIndex((i) => i._id === payload._id);
      if (data >= 0 && payload.order == 0) {
        return {
          ...state,
          cart: [...state.cart.slice(0, data), ...state.cart.slice(data + 1)],
          tot: state.tot - payload.discountPrice,
        };
      } else {
        state.cart[data].order = payload.order;
        return { ...state, tot: state.tot - payload.discountPrice };
      }

    default:
      return init;
  }
};

export default userReducer;
