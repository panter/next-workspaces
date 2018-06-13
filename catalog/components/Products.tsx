import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Short coat",
    price: 229.49,
    quantity: 1,
    image: "product-1.jpeg"
  },
  {
    id: 2,
    name: "Classic coat",
    price: 63.99,
    image: "product-2.jpeg"
  },
  {
    id: 3,
    name: "Pyjama bottoms",
    price: 27.49,
    image: "product-3.jpeg"
  },
  {
    id: 4,
    name: "Trainers",
    price: 34.24,
    image: "product-4.jpeg"
  }
];

const Products = () => {
  return (
    <div>
      {products.map(product => <Product key={product.id} {...product} />)}
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default Products;
