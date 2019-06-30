import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
  // ICECREAM_LOADED,
  // ICECREAM_ERROR
} from "./types";

//Load Icecream

// export const loadIcecreamItems = () => async dispatch => {
//   try {
//     const res = await axios.get("/api/icecream");
//     dispatch({
//       type: ICECREAM_LOADED,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: ICECREAM_ERROR
//     });
//   }
//   console.log("test");
// };

export const loadIcecreamItems = async () => {
  console.log("test");
  // let iceCreamItems = {};
  try {
    const res = await axios.get("/api/icecream");

    // iceCreamItems += res.data;
    // console.log(iceCreamItems);
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

//Register new icecream
export const register = ({
  flavour,
  price,
  description,
  quantity
}) => async dispatch => {
  //POST to bk-end for register icecream

  //config object holds the http headers (set type)
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //prepare data to be sent
  const body = JSON.stringify({ flavour, price, description, quantity });

  try {
    //get response from bk-end
    const res = await axios.post("/api/icecream", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    //grab errors from server
    const errors = err.response.data.errors;

    //check if there is any error in the array
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
