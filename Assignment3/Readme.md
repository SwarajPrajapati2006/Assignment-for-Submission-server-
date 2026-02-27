States Management API

This project is a RESTful API built using Node.js and Express.js to manage data of Indian states such as population, literacy rate, GDP, and annual budget.

Tech Stack

Node.js

Express.js

JavaScript

In-memory JSON data

How to Run the Project

Install dependencies

npm install

Start the server

node index.js

Server will run on
https://assignment-for-submission-server-5.onrender.com/states

API Endpoints
GET /states

Returns the names of all states.

GET /states/highest-gdp

Returns the highest GDP among all states.

GET /states/:id

Returns state details by ID.

POST /addStates

Adds multiple states.

Request Body:

[
  {
    "id": 29,
    "name": "New State",
    "population": 5000000,
    "literacyRate": 80,
    "annualBudget": 50000,
    "gdp": 2000000
  }
]
PUT /states/:id

Updates full state data.

PUT /states/:id/budget

Updates the annual budget of a state.

Request Body:

{
  "budget": 400000
}
PUT /states/:id/population

Updates the population of a state.

Request Body:

{
  "population": 60000000
}
PATCH /states/:id/literacy

Updates literacy rate of a state.

Request Body:

{
  "literacyRate": 90
}
PATCH /states/:id/gdp

Updates GDP of a state.

Request Body:

{
  "gdp": 25000000
}
DELETE /states/:id

Deletes a state by ID.

DELETE /states/name/:stateName

Deletes a state by name.

Example:

/states/name/kerala
Notes

Data is stored in memory (no database).

Restarting the server will reset the data.

Use Content-Type: application/json for POST, PUT, and PATCH requests.

Author

Swaraj Prajapati
