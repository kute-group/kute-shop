import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/style.css";

import ListProducts from "./containers/products/ListProducts";
import FormProduct from "./containers/products/FormProduct";
import ListProductCategories from "./containers/products/ListProductCategories";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<ListProducts />} />
            <Route path="/product/add" element={<FormProduct />} />
            <Route path="/product/:id" element={<FormProduct />} />
            <Route
              path="/product_categories"
              element={<ListProductCategories />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
