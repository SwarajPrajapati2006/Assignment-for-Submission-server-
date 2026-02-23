const express = require("express");
const app = express()
app.use(express.json())
const cors = require("cors");
app.use(cors());


const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];


app.get("/students",(req,res)=>{
    res.status(200).json({
        msg:"data fetched successfully",
        data :students
    })
})

app.get("/students/topper",(req,res)=>
{
    let maxCgpa = 0;
let topper = null;
for(let i = 0;i<students.length;i++){
  if(students[i].cgpa>maxCgpa){
    maxCgpa = students[i].cgpa
    topper = students[i]
  }
}

res.status(200).json({
    msg:"data found",
    data :topper
})

})

app.get("/students/average",(req,res)=>{
    let avgCgpa= 0;
for(let i = 0;i<students.length;i++){
  avgCgpa+=(students[i].cgpa)
}

res.status(200).json({
    msg:"data found",
    AverageCgpa : avgCgpa
})


})

app.get("/students/count",(req,res)=>{
    let count = 0;
for(let i = 0;i<students.length;i++){
  count++
}

res.status(200).json({
    message:"total count found",
    data:count
})
})

app.get("/students/:id",(req,res)=>{
    const id  = Number(req.params.id)
    const data = students.find(student =>student.id===id )

    if(data==undefined){
        res.status(404).json({
            msg:"data not found"
        })
    }
   res.status(200).json({
    msg :"data found",
    students:data
   })
})

app.get("/students/branch/:branchName",(req,res)=>{
    const val = req.params.branchName;
    const data = students.filter(student=>student.branch.toLowerCase()==val.toLowerCase()) 

    if(!data){
        res.status(404).json({
            msg:"data not found"
        })
    }

    res.status(200).json({
        msg:"data found",
        data :data
    })
})

app.listen(3000,()=>{
    console.log("server is running in 3000 port")
})