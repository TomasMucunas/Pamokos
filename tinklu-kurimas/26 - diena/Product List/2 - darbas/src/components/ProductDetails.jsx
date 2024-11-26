import React from "react";
import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Details for {product.name}</p>
      <Link to="/">Back to Product List</Link>
    </div>
  );
}

export default ProductDetails;
