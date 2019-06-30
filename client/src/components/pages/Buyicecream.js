import React, { Fragment } from "react";

const Buyicecream = () => {
  return (
    <Fragment>
      <div className="card p-5 col-sm-8 mx-auto mt-5">
        <h1 className="mt-5 text-center  mb-5">
          Buy your favourite icecream from below!
        </h1>
        <div className="col-sm-8 mx-auto">
          Vending Machine is here
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card text-center mt-5 mb-5">
                {/* <h5>Cherry</h5> */}
                <h5>Cherry</h5>
                <p>price: 5$</p>
                <p>stock: 20 </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card text-center mt-5 mb-5">
                <h5>Cherry</h5>
                <p>price: 5$</p>
                <p>stock: 20 </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card text-center mt-5 mb-5">
                <h5>Cherry</h5>
                <p>price: 5$</p>
                <p>stock: 20 </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card text-center mt-5 mb-5">
                <h5>Cherry</h5>
                <p>price: 5$</p>
                <p>stock: 20 </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card text-center mt-5 mb-5">
                <h5>Cherry</h5>
                <p>price: 5$</p>
                <p>stock: 20 </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card text-center mt-5 mb-5">
                <h5>Cherry</h5>
                <p>price: 5$</p>
                <p>stock: 20 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Choose your flavour"
                name="flavour"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="How many do you want?"
                name="price"
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="Buy Ice Cream"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Buyicecream;
