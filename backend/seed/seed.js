const mongoose = require("mongoose");
const User = require("../models/User");
const Product = require("../models/Product");
const bcrypt = require("bcryptjs");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  await User.deleteMany();
  await Product.deleteMany();

  const users = await User.insertMany([
    { email: "test1@mail.com", password: await bcrypt.hash("123456", 10) },
    { email: "test2@mail.com", password: await bcrypt.hash("123456", 10) }
  ]);

  const products = [];
  for (let i = 1; i <= 10; i++) {
    products.push({
      title: "Product " + i,
      price: i * 100,
      description: "Sample product " + i,
      image: "https://via.placeholder.com/150"
    });
  }

  await Product.insertMany(products);

  console.log("Seeded!");
  process.exit();
}

seed();
