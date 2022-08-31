import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import FavouriteProducts from "./Pages/FavouriteProducts";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Products />}></Route>
        <Route path="/favourite" element={<FavouriteProducts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:category_id" element={<Products />}></Route>
        <Route path="/product/:product_id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
