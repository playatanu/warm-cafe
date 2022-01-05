const cartAction = (value) => {
  return {
    type: "updateCart",
    payload: value,
  };
};

export default cartAction;
