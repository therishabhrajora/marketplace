const User = require("../models/User");
const Product = require("../models/Product");
const bcrypt = require("bcryptjs");

const autoSeed = async () => {
  const userCount = await User.countDocuments();
  const productCount = await Product.countDocuments();

  if (userCount === 0 && productCount === 0) {
    console.log("Seeding database...");

    await User.insertMany([
      {
        email: "test1@mail.com",
        password: await bcrypt.hash("123456", 10),
      },
      {
        email: "test2@mail.com",
        password: await bcrypt.hash("123456", 10),
      },
    ]);

    const images = [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    ];

    const products = [];

    for (let i = 1; i <= 10; i++) {
      products.push({
        title: "Product " + i,
        price: i * 100,
        description: "Sample product " + i,
        image: images[i - 1],
      });
    }

    await Product.insertMany(products);

    console.log("Database seeded successfully!");
  } else {
    console.log("Database already has data. Skipping seed.");
  }
};

module.exports = autoSeed;
