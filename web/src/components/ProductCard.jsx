import API from "../api/axios";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const toggleFavorite = async () => {
    await API.post(`/products/favorite/${product._id}`);
    alert("Toggled favorite");
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 relative">
      
      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 text-xl text-gray-400 hover:text-red-500 transition-transform duration-200 hover:scale-125"
      >
        ❤️
      </button>

      {/* Product Image */}
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mb-4"
        />
      </Link>

      {/* Product Info */}
      <Link to={`/product/${product._id}`}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
          {product.title}
        </h3>
      </Link>

      <p className="text-blue-600 font-bold text-lg">
        ₹{product.price}
      </p>
    </div>
  );
}
