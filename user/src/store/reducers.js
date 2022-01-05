import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
const reducers = combineReducers({
  cartReducer,
});

export default reducers;
