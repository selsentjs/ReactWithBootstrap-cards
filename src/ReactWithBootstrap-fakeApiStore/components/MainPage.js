import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const MainPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
