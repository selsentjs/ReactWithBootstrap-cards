import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./css/style.css";
import { NavLink } from "react-router-dom";

const Product = () => {
  // main
  const [data, setData] = useState([]);
  //console.log("data:", data);
  // search
  const [search, setSearch] = useState("");
//=====================================================================================
  const api = "https://fakestoreapi.com/products";

  const fakeStore = async () => {
    const response = await fetch(api);
    //console.log("response:", response);
    const jsonData = await response.json();
    //console.log('jsonData:', jsonData)
    setData(jsonData);
  };

  useEffect(() => {
    fakeStore();
  }, []);
//=========================================================================================
  //search

  useEffect(() => {
    const result = data?.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    if (search.length > 0) {
      setData(result);
    } else {
      fakeStore();
    }
  }, [search]);
//==============================================================================
  // filter category by button

  const filterResult = (category) => {
    const result = data.filter((item) => {
      return item.category === category;
    });
    setData(result);
    console.log("result: ", result);
  };

  //===========================================================================
  // filter category by dropdown
  const filterCategory = (e) => {
    let searchWord = e.target.value.toLowerCase();

    console.log("searchWord:", searchWord);
    if (searchWord === "men's clothing") {
      const filtered = data.filter((item) => {
        return item.category === "men's clothing";
      });
      console.log("filtered:", filtered);
      setData(filtered);
    } else if (searchWord === "women's clothing") {
      const filtered = data.filter((item) => {
        return item.category === "women's clothing";
      });
      console.log("filtered:", filtered);
      setData(filtered);
    } else if (searchWord === "jewelery") {
      const filtered = data.filter((item) => {
        return item.category === "jewelery";
      });
      setData(filtered);
    } else if (searchWord === "electronics") {
      const filtered = data.filter((item) => {
        return item.category === "electronics";
      });
      setData(filtered);
    } else {
      return fakeStore();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mb-2 pt-5">Product</h1>
          <hr className="py-3" />
        </div>
      </div>

      {/* // search */}
      <div className="d-flex justify-content-center py-3">
        <input
          type="text"
          placeholder="search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
   {/* //===================================================================================================== */}
        {/* // filter by button */}

        <div>
          <button className="btn btn-warning ms-3" onClick={() => fakeStore()}>
            All
          </button>
          <button
            className="btn btn-warning ms-3"
            onClick={() => filterResult("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-warning ms-3"
            onClick={() => filterResult("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-warning ms-3"
            onClick={() => filterResult("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-warning ms-3"
            onClick={() => filterResult("electronics")}
          >
            Electronics
          </button>
        </div>
        {/* //=================================================================================== */}
        {/* // filter by dropdown box*/}

        <div className="ms-3">
          <label htmlFor="category">Category</label>
          <select name="category" onClick={filterCategory}>
            <option value="">Please select category </option>
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </div>
      {/* //============================================================================================ */}
      {/* // cards */}
      <div className="row">
        {data?.length > 0
          ? data?.map((item) => {
              return (
                <div className="col-md-3 ">
                  <div
                    className="card mx-auto m-4 py-3 text-center "
                    key={item.id}
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={item.image}
                      className="card-img-top mx-auto p-2"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h5 className="lead">${item.price}</h5>
                      <p className="card-text">{item.description}</p>
                      <NavLink
                        to={`/products/${item.id}`}
                        className="btn btn-primary "
                      >
                        Buy
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })
          : "No data Available"}
      </div>
    </div>
  );
};

export default Product;
