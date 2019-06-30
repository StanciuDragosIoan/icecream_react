import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
  // ICECREAM_LOADED,
  // ICECREAM_ERROR
} from "../actions/types";

const initialState = {
  loading: true,
  icecream: null
};

export default function(state = initialState, action) {
  //destructure action
  const { type, payload } = action;
  //run switch on the type
  switch (type) {
    // case ICECREAM_LOADED:
    //   return {
    //     ...state,
    //     loading: false,
    //     icecream: payload
    //   };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case REGISTER_FAIL:
      // case ICECREAM_ERROR:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
