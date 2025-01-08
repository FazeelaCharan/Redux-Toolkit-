import React from "react";
import { useParams, Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1500,
    description: "A high-performance laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description: "A cutting-edge smartphone",
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    description: "Noise-canceling headphones",
  },
];

const ProductDetails = () => {
  const param = useParams();
  console.log(param);

  const product = products.find((item) => item.id === parseInt(param.id));

  return (
    <>
      {!param.id ? (
        <div>
          <h1>Welcome to the Products Page.</h1>
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                <Link to={`/product/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : product ? (
        <div>
          <h1>Product Details</h1>
          <h1>{product.name}</h1>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
};

export default ProductDetails;
