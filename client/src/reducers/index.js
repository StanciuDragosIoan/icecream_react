import { combineReducers } from "redux";
import alert from "./alert";
import icecream_reducer from "./icecream_reducer";
export default combineReducers({
  //alert reducer
  alert,
  //icecream reducer
  icecream_reducer
});
