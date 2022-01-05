const userAction = (value) => {
  return {
    type: "updateUserState",
    payload: value,
  };
};

export default userAction;
