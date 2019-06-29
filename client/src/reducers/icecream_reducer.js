import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  loading: true,
  icecream: null
};

export default function(state = initialState, action) {
  //destructure action
  const { type, payload } = action;
  //run switch on the type
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
