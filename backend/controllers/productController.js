const Product = require("../models/Product");

// Create product
exports.createProduct = async (req, res) => {
  try {
    const { title, price, description, image } = req.body;

    const product = await Product.create({
      title,
      price,
      description,
      image,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
