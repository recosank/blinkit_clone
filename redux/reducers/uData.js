let init = {
  cart: [],
  tot: 0,
};

const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case "populateCart":
      let price = 0;
      payload.map((val) => (price = price + parseInt(val.newPrice)));
      return {
        cart: payload,
        tot: price,
      };
    case "addCart":
      return {
        ...state,
        cart: [...state.cart, payload],
        tot: state.tot + payload.newPrice,
      };
    case "remCart":
      const data = state.cart.findIndex((i) => i._id === payload._id);
      return {
        ...state,
        cart: [...state.cart.slice(0, data), ...state.cart.slice(data + 1)],
        tot: state.tot - payload.newPrice,
      };
    //const data = state.cart.findIndex((i) => i._id === payload._id);
    //console.log(data);
    //return data.toString() === "-1"
    //  ? {
    //      ...state,
    //      cart: [...state.cart, payload],
    //      tot: state.tot + payload.newPrice,
    //    }
    //  : {
    //      ...state,
    //      cart: [...state.cart.slice(0, data), ...state.cart.slice(data + 1)],
    //      tot: state.tot - payload.newPrice,
    //    };

    default:
      return init;
  }
};

export default userReducer;
