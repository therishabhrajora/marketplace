const router = require("express").Router();
const Product = require("../models/Product");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const { createProduct } = require("../controllers/productController");

// Create product
router.post("/", auth, createProduct);

// 🔥 Get My Favorites (MOVE THIS UP)
router.get("/favorites/my", auth, async (req, res) => {
  const user = await User.findById(req.user.id).populate("favorites");
  res.json(user.favorites);
});

// Favorite toggle
router.post("/favorite/:id", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  const productId = req.params.id;

  const index = user.favorites.indexOf(productId);
  if (index > -1) {
    user.favorites.splice(index, 1);
  } else {
    user.favorites.push(productId);
  }

  await user.save();
  res.json(user.favorites);
});

// Get products
router.get("/", async (req, res) => {
  const { search = "", page = 1, limit = 10 } = req.query;

  const query = {
    title: { $regex: search, $options: "i" }
  };

  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.json(products);
});

// ❗ KEEP THIS LAST
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Update product
router.put("/:id", auth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
});

// Delete product
router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;