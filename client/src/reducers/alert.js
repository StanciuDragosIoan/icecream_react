import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  //destructure action
  const { type, payload } = action;

  //evaluate type (constat vars held in the actions/types.js)
  switch (type) {
    //dispatch set alert
    case SET_ALERT:
      //return array with the new alert added
      return [...state, payload];
    case REMOVE_ALERT:
      //return array with all alerts except the 1 that matches the payload
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
