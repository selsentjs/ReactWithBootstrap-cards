import React, { useState, useEffect } from "react";
import Data from "./Data/Data";
import { NavLink } from "react-router-dom";
import "./css/style.css";
const Product = () => {
  // main state
  const [data, setData] = useState(Data);
  // search
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };
  useEffect(() => {
    const result = data?.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchData.toLowerCase());
    });
    if (searchData.length > 0) {
      setData(result);
    } else {
      setData(Data);
    }
  }, [searchData]);
  
  
  return (
    <section className="products ">
      <div className="container ">
        <div className="row">
          <div className="col-12 text-center py-5">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            placeholder="search here"
            value={searchData}
            onChange={handleSearch}
          />
        </div>
        {/* // cards */}
        <div className="row">
          {data.length > 0
            ? data?.map((item) => {
                return (
                  <div className="col-md-4 mb-5">
                    <div
                      className="card text-center p-2 mx-auto"
                      key={item.id}
                      style={{ width: "18rem" }}
                    >
                      <img
                        src={item.image}
                        className="card-img-top mx-auto"
                        alt={item.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="card-title">${item.price}</h5>
                        <p className="card-text">{item.description}</p>
                        <NavLink
                          to={`/product/${item.id}`}
                          className="btn btn-primary"
                        >
                          Buy
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })
            : "No Data Available"}
        </div>
      </div>
    </section>
  );
};

export default Product;
