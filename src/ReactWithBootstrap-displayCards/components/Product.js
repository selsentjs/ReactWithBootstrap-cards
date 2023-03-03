import React from "react";
import Data from "./Data/Data";
import { NavLink } from "react-router-dom";
import './css/style.css'
const Product = () => {
  return (
    <section className="products ">
      <div className="container ">
        <div className="row">
          <div className="col-12 text-center py-5">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
        {/* // cards */}
        <div className="row">
          {Data.map((item) => {
            return (
              <div className="col-md-4 mb-5">
                <div className="card text-center p-2 mx-auto" key={item.id} style={{ width: "18rem" }}>
                  <img src={item.image} className="card-img-top mx-auto" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-title">${item.price}</h5>
                    <p className="card-text">{item.description}</p>
                    <NavLink to="/" className="btn btn-primary">
                      Buy
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
