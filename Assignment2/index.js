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
  const data = products.find(product => product.id === id);

  if (!data) {
    return res.status(404).json({
      message: "data not found"
    });
  }

  res.status(200).json({
    message: "Data found",
    data
  });
});

app.get("/products/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  const data = products.filter(
    product => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (data.length === 0) {
    return res.status(404).json({
      msg: "Category not found"
    });
  }

  res.status(200).json({
    msg: "data found",
    data
  });
});

app.post("/products", (req, res) => {
  const newProducts = req.body;

  if (!Array.isArray(newProducts)) {
    return res.status(400).json({
      msg: "enter data"
    });
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
    return res.status(400).json({
      msg: "stock is required and must be a number"
    });
  }

  const prod = products.find(product => product.id === id);

  if (!prod) {
    return res.status(404).json({
      msg: "product not found"
    });
  }

  prod.stock = stock;

  res.status(200).json({
    msg: "stock updated",
    data: prod
  });
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const newProduct = req.body;

  const index = products.findIndex(product => product.id === id);

  if (index === -1) {
    return res.status(404).json({
      msg: "not found"
    });
  }

  products[index] = { ...products[index], ...newProduct };

  res.status(200).json({
    msg: "data updated successfully",
    data: products[index]
  });
});

app.put("/products/:id/price",(req,res)=>{
    const id = Number(req.params.id);
    const price  = Number(req.body.price)


    const product = products.find(prod=>prod.id==id)
    if(!product){
        res.status(404).json({
            msg:"data not found"
        })
    }
    product.price = price;
    res.status(200).json({
        msg:"price Updated",
        data : product
    })
})

app.listen(3000, () => {
  console.log("server is running on port 3000");
});