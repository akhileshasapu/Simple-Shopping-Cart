import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid"; // updated import

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg shadow-md p-4 m-2 flex flex-col items-center bg-white hover:shadow-xl transition-transform transform hover:scale-105">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-36 h-36 object-contain mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
      <p className="text-gray-700 font-medium mb-4">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
      >
        <ShoppingCartIcon className="w-5 h-5 animate-bounce" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
