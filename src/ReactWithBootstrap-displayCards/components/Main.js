
// codesandbox
// https://codesandbox.io/s/intelligent-fermat-xgu89d?file=/src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import Contact from "./Contact";
import ProductDetails from './ProductDetails';
import Home from './Home';
function Main() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Main;
