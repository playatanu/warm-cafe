import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
const reducers = combineReducers({
  cartReducer,
  userReducer,
});

export default reducers;
