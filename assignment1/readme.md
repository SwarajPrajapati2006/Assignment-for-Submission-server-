# Student Management API

A RESTful API built using Node.js and Express.js that provides student information and basic academic analytics such as topper, average CGPA, total student count, and filtering by ID or branch.
## postman documentation link --https://documenter.getpostman.com/view/50840877/2sBXcGCzEx
## Features
- Fetch all students
- Get student by ID
- Find topper based on CGPA
- Calculate average CGPA
- Get total student count
- Filter students by branch

## Tech Stack
- Node.js
- Express.js
- CORS
- JavaScript (in-memory data)

## Installation & Run
1. Install dependencies:
   npm install

2. Start the server:
   node index.js

Server runs at:https://assignment-for-submission-server-9q5r.onrender.com/students

## API Endpoints

GET /students  
Returns the list of all students.

GET /students/topper  
Returns the student with the highest CGPA.

GET /students/average  
Returns the total/average CGPA of all students.

GET /students/count  
Returns the total number of students.

GET /students/:id  
Returns a student by their ID.  
Example: /students/5

GET /students/branch/:branchName  
Returns students belonging to a specific branch (case-insensitive).  
Example: /students/branch/CSE

## Data Format
Each student object contains:
- id
- name
- branch
- semester
- cgpa

## Notes
- Data is stored in memory (no database)
- API resets on server restart
- Tested using Postman
- Built for learning REST API concepts with Express.js
