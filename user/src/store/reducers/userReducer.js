const userReducer = (
  state = {
    name: "Atanu Debnath",
    email: "playatanu@gmail.com",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    phone: "6296843271",
    address: "Malanchapara Ambagan",
  },
  action
) => {
  switch (action.type) {
    case "updateUserState":
      return action.payload;
    case "updateUserNAP":
      var newState = {
        name: action.payload.name,
        email: state.email,
        image: state.image,
        phone: action.payload.phone,
        address: action.payload.address,
      };
      return newState;
    default:
      return state;
  }
};

export default userReducer;
