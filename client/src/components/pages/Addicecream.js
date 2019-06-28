import React, { Fragment, useState } from "react";

const Addicecream = () => {
  //use state hook
  const [formData, setFormData] = useState({
    flavour: "",
    price: "",
    description: "",
    quantity: ""
  });

  //destructure state
  const { flavour, price, description, quantity } = formData;

  return (
    <Fragment>
      <div className="container">
        <h3 className="mt-5">Add new icecream flavours to our shop!:D</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="What's your flavour?"
              name="flavour"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Price per piece?"
              name="price"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="What does it taste like?"
              name="description"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="How many pieces do you have in stock?"
              name="quantity"
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

export default Addicecream;
