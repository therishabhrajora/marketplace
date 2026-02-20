import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    nav("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/products" className="text-xl font-bold text-blue-600">
        Marketplace
      </Link>

      <div className="space-x-4 flex items-center">
        <Link
          to="/products"
          className="text-gray-700 hover:text-blue-600"
        >
          Products
        </Link>

        {isLoggedIn && (
          <>
            <Link
              to="/profile"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}