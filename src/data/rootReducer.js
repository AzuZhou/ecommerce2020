import { combineReducers } from 'redux';
import userReducer from 'data/user/reducer';

export default combineReducers({
  user: userReducer,
});
