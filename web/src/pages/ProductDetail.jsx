import { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const nav = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    API.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  // 🔐 Check login before action
  const requireAuth = () => {
    if (!isLoggedIn) {
      alert("Please login first");
      nav("/login");
      return false;
    }
    return true;
  };

  const toggleFavorite = async () => {
    if (!requireAuth()) return;

    try {
      await API.post(`/products/favorite/${id}`);
      alert("Favorite toggled");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  const handleDelete = async () => {
    if (!requireAuth()) return;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/products/${id}`);
      alert("Product deleted successfully!");
      nav("/products");
    } catch (err) {
      alert("Delete failed");
    }
  };

  const handleUpdate = () => {
    if (!requireAuth()) return;
    nav(`/update-product/${product._id}`);
  };

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
        
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-blue-600 mb-6">
            ₹{product.price}
          </p>

          <div className="flex flex-wrap gap-3">
            
            <button
              onClick={toggleFavorite}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition"
            >
              ❤️ Favorite
            </button>

            <button
              onClick={handleUpdate}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
            >
              Update
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              Delete
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}