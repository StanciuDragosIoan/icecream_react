import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

//Register new icecream
export const register = ({
  flavour,
  price,
  description,
  quantity
}) => async dispatch => {
  //POST to bk-end for register icecream

  //config object holds the http headers
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
