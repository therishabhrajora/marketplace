<button
  onClick={toggleFavorite}
  className={`text-xl p-2 rounded-full transition-transform duration-200 hover:scale-125 ${
    isFavorite ? "text-red-500" : "text-gray-400"
  }`}
>
  ❤️
</button>
