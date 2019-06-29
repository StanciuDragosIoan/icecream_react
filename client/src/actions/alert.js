import uuid from "uuid";
// import set alert and remove alert which will be dispatched and call the case from the reducer
import { SET_ALERT, REMOVE_ALERT } from "./types";

//dispatch multiple action types -we can do this thanks do the thunk middleware
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  //remove alert after certain time
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
