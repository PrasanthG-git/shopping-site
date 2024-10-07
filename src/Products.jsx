import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="gap-4 grid grid-cols-2 p-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded">
          <img
            src={product.image}
            alt={product.title}
            className="hover:shadow-lg mb-2 w-48 h-48 transform transition-transform duration-300 ease-in-out object-contain hover:scale-110"
          />
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="mb-2 text-gray-600 text-sm">{product.description}</p>
          <p className="font-bold">Rs.{product.price*82}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 mt-2 px-4 py-2 text-white"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
