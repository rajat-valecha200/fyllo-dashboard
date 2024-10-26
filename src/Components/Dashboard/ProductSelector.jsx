import React from "react";

const ProductSelector = ({ products, selectedProduct, setSelectedProduct }) => {
  return (
    <select onChange={(e) => setSelectedProduct(e.target.value)} value={selectedProduct}>
      {products.map((product) => (
        <option key={product} value={product}>
          {product}
        </option>
      ))}
    </select>
  );
};

export default ProductSelector;