import React from 'react';
import {Route, Routes, Outlet} from 'react-router-dom';
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {

  return (
    <div>
      <h1>Product Feature</h1>
      <Outlet />
      <Routes>
        <Route path="/" element={<ProductListPage/>}/>
        <Route path="/:id" element={<ProductDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default ProductFeature;