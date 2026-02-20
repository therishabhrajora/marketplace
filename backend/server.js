const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const autoSeed = require("./seed/seed");

const app = express();

// Connect DB
connectDB().then(() => {
  autoSeed();
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/products", require("./routes/productRoutes"));

app.listen(5000, "0.0.0.0", () =>
  console.log("Server running on port 5000")
);
