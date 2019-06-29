import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/icecream_actions";
import PropTypes from "prop-types";

// import axios from "axios";

//destructure props so no need to call props.setAlert further down
const Addicecream = ({ setAlert, register }) => {
  //use state hook
  const [formData, setFormData] = useState({
    flavour: "",
    price: "",
    description: "",
    quantity: ""
  });

  //destructure state
  const { flavour, price, description, quantity } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (!flavour) {
      // console.log("There is an issue with the icecream data...");
      setAlert("There is an issue with the icecream data...", "danger");
    } else {
      // // ###request without redux
      // const newIcecream = formData;

      // try {
      //   //config object holds the http headers
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   };

      //   //data body
      //   const body = JSON.stringify(newIcecream);

      //   //response
      //   const res = await axios.post("/api/icecream", body, config);
      //   console.log(res.data);
      // } catch (err) {
      //   console.log(err.response.data);
      // }
      // console.log("Success");
      register({ flavour, price, description, quantity });
    }
  };
  return (
    <Fragment>
      <div className="container">
        <h3 className="mt-5">Add new icecream flavours to our shop!:D</h3>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="What's your flavour?"
              name="flavour"
              value={flavour}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Price per piece?"
              name="price"
              value={price}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="What does it taste like?"
              name="description"
              value={description}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="How many pieces do you have in stock?"
              name="quantity"
              value={quantity}
              onChange={e => onChange(e)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Ice Cream"
          />
        </form>
      </div>
    </Fragment>
  );
};

Addicecream.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(Addicecream);
