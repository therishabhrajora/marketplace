import { useEffect, useState } from "react";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    const res = await API.get(`/products?search=${search}`);
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Products
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <p className="text-gray-500 mt-10 text-center">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
