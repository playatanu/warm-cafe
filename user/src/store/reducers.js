import {combineReducers} from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import geoReducer from './reducers/geoReducer';
const reducers = combineReducers({
  cartReducer,
  userReducer,
  geoReducer,
});

export default reducers;
