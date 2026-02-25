Products API – Express.js

A simple REST API built with Node.js and Express.js to manage products.
This project uses an in-memory array (no database) and supports product listing, filtering, creation, and updates for stock and price.

Tech Stack

Node.js

Express.js

CORS

REST API (JSON)

Installation & Setup
1. Install dependencies
npm install express cors
2. Start the server
node index.js

Server will run at:

http://localhost:3000
Product Data Structure
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

Data is stored in memory (resets when the server restarts)

id must be unique

Request body keys are case-sensitive

Always send JSON data
