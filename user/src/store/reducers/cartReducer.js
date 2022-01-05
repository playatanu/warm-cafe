const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "updateCart":
      return (state = action.payload);
    default:
      return state;
  }
};

export default cartReducer;
