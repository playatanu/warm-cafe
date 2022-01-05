const userReducer = (
  state = {
    name: "name",
    email: "email",
    phone: "phone",
    address: "address",
  },
  action
) => {
  switch (action.type) {
    case "updateUserState":
      return (state = action.payload);
    default:
      state;
  }
};

export default userReducer;
