import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await API.get(
      `/products?search=${search}&page=${page}&limit=6`
    );
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [search, page]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Products
        </h1>

        {/* Search */}
        <div className="mb-8">
          <input
            placeholder="Search products..."
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // reset page on search
            }}
            className="w-full md:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-40 mx-auto object-contain mb-4"
              />

              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {p.title}
              </h3>

              <p className="text-blue-600 font-bold text-lg mb-3">
                ₹{p.price}
              </p>

              <Link
                to={`/product/${p._id}`}
                className="inline-block text-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-700 text-white hover:bg-gray-800"
            }`}
          >
            Prev
          </button>

          <span className="px-4 py-2 font-semibold text-gray-700">
            Page {page}
          </span>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}