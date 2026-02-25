const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 4999, stock: 12, rating: 4.4 },
  { id: 5, name: "Backpack", category: "Fashion", price: 1599, stock: 50, rating: 4.1 }
];

app.get("/products", (req, res) => {
  res.status(200).json({
    msg: "All products data",
    data: products
  });
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ msg: "data not found" });
  }

  res.status(200).json({
    msg: "Data found",
    data: product
  });
});

app.get("/products/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName.toLowerCase();
  const data = products.filter(
    p => p.category.toLowerCase() === categoryName
  );

  if (data.length === 0) {
    return res.status(404).json({ msg: "Category not found" });
  }

  res.status(200).json({
    msg: "data found",
    data
  });
});

app.post("/products", (req, res) => {
  const newProducts = req.body;

  if (!Array.isArray(newProducts)) {
    return res.status(400).json({ msg: "enter data" });
  }

  products.push(...newProducts);

  res.status(200).json({
    msg: "data added successfully",
    data: newProducts
  });
});

app.put("/products/:id/stock", (req, res) => {
  const id = Number(req.params.id);
  const stock = Number(req.body.stock);

  if (Number.isNaN(stock)) {
    return res.status(400).json({ msg: "stock must be a number" });
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ msg: "product not found" });
  }

  product.stock = stock;

  res.status(200).json({
    msg: "stock updated",
    data: product
  });
});

app.put("/products/:id/price", (req, res) => {
  const id = Number(req.params.id);
  const price = Number(req.body.price);

  if (Number.isNaN(price)) {
    return res.status(400).json({ msg: "price must be a number" });
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ msg: "data not found" });
  }

  product.price = price;

  res.status(200).json({
    msg: "price updated",
    data: product
  });
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const newProduct = req.body;

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }

  products[index] = { ...products[index], ...newProduct };

  res.status(200).json({
    msg: "data updated successfully",
    data: products[index]
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});