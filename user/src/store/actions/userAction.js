const userAction = (value) => {
  return {
    type: "updateUserState",
    payload: value,
  };
};

const userActionNAP = (value) => {
  return {
    type: "updateUserNAP",
    payload: value,
  };
};

export default userAction;

export { userActionNAP };
