import React from "react";
import { useParams, Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1500,
    description: "A high-performance laptop",
    image:
      "https://i.pcmag.com/imagery/reviews/06Id58TJW8pkzAkqmSi7hjU-1.fit_lim.size_919x518.v1729701979.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description: "A cutting-edge smartphone",
    image:
      "https://www.zdnet.com/a/img/resize/f64a9c0fdf3804f32c3ccbf277fd435fa8e5fb8e/2024/09/20/26bb71de-4ca7-41f1-b571-aa8b8fbea984/pxl-20240920-182818696-mp.jpg?auto=webp&fit=crop&height=900&width=1200",
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    description: "Noise-canceling headphones",
    image:
      "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg?width=1200&height=900&fit=crop",
  },
];

const ProductDetails = () => {
  const param = useParams();
  console.log(param);

  const product = products.find((item) => item.id === parseInt(param.id));

  return (
    <>
      {!param.id ? (
        <div className="h-screen">
          <h1>Welcome to the Products Page.</h1>
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                <Link to={`${item.id}`} className="bg-red-300  text-lg">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : product ? (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
};

export default ProductDetails;
