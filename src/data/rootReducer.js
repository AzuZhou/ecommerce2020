import { combineReducers } from 'redux';
import userReducer from 'data/user/reducer';
import cartReducer from 'data/cart/reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
