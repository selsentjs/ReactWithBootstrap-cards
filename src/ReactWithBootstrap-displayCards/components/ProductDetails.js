import React from "react";
import { useParams } from "react-router-dom";
import Data from './Data/Data'

const ProductDetails = () => {
    const proId = useParams();

    // use '==' don't use '==='
    const proDetail = Data.filter((x) => x.id == proId.id);
    const product = proDetail[0];
    console.log("product", product);
  

  return (
    <div>
      <div className="container px-2 py-5">
        <div className="row">
          <div className="flex mx-auto col-md-6 justify-content-center product">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "400px", height: "400px" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.name}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.description}</p>
            <button className="my-5 btn btn-dark">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
