import "./App.css";
// codesandbox
// https://codesandbox.io/s/intelligent-fermat-xgu89d?file=/src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ReactWithBootstrap-displayCards/components/Home";
import About from "./ReactWithBootstrap-displayCards/components/About";
import Header from "./ReactWithBootstrap-displayCards/components/Header";
import Footer from "./ReactWithBootstrap-displayCards/components/Footer";
import Product from "./ReactWithBootstrap-displayCards/components/Product";
import Contact from "./ReactWithBootstrap-displayCards/components/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
