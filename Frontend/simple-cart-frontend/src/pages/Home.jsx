import React, { useEffect, useState, useContext } from "react";
import api from "../api/api";
import ProductCard from "../components/ProductCard";

import { CartContext } from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Products</h1>

      

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;
