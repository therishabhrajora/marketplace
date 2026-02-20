import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    API.get("/products/favorites/my").then(res =>
      setFavorites(res.data)
    );
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      <div className="grid grid-cols-3 gap-4">
        {favorites.map((p) => (
          <div key={p._id} className="border p-3 rounded">
            <img src={p.image} className="h-32 mx-auto" />
            <h3>{p.title}</h3>
            <p>₹{p.price}</p>
            <Link to={`/product/${p._id}`} className="text-blue-500">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}