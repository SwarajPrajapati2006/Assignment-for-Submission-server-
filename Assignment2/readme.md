Products Management API (Express.js)

This is a simple Products Management REST API built using Node.js and Express.js.
It manages product data using an in-memory array (no database).

Features

Get all products

Get product by ID

Get products by category

Add new products

Update full product details

Update product stock

Update product price

Tech Stack

Node.js

Express.js

CORS

JSON REST API

Setup & Run
Install dependencies
npm install express cors
Run the server
node index.js

Server will run on:

http://localhost:3000
Product Data Format
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
API Endpoints
Get all products

GET /products

Get product by ID

GET /products/:id

Example:

GET /products/1
Get products by category

GET /products/category/:categoryName

Example:

GET /products/category/Electronics
Add new products

POST /products

Request body (array required):

[
  {
    "id": 6,
    "name": "Keyboard",
    "category": "Electronics",
    "price": 1299,
    "stock": 20,
    "rating": 4.6
  }
]
Update full product (partial update supported)

PUT /products/:id

{
  "name": "Updated Mouse",
  "price": 899
}
Update product stock

PUT /products/:id/stock

{
  "stock": 50
}
Update product price

PUT /products/:id/price

{
  "price": 1999
}
Important Notes

Data is stored in memory (resets when server restarts)

IDs must be unique

Request body keys are case-sensitive

Always send requests with JSON format