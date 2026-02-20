import { useNavigate } from "react-router-dom";

export default function Profile() {
  const nav = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <button
        onClick={() => nav("/favorites")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        ❤️ View Favorite Products
      </button>
    </div>
  );
}