const express = require("express")
const app = express()
app.use(express.json())




const states = [
    { id: 1, name: "Andhra Pradesh", population: 49386799, literacyRate: 67.02, annualBudget: 279279, gdp: 14000000 },
    { id: 2, name: "Arunachal Pradesh", population: 1383727, literacyRate: 65.38, annualBudget: 28000, gdp: 300000 },
    { id: 3, name: "Assam", population: 31205576, literacyRate: 72.19, annualBudget: 122000, gdp: 4500000 },
    { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
    { id: 5, name: "Chhattisgarh", population: 25545198, literacyRate: 70.28, annualBudget: 121500, gdp: 4000000 },
    { id: 6, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 },
    { id: 7, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
    { id: 8, name: "Haryana", population: 25351462, literacyRate: 75.55, annualBudget: 180000, gdp: 9000000 },
    { id: 9, name: "Himachal Pradesh", population: 6864602, literacyRate: 82.80, annualBudget: 50000, gdp: 2000000 },
    { id: 10, name: "Jharkhand", population: 32988134, literacyRate: 66.41, annualBudget: 110000, gdp: 4500000 },
    { id: 11, name: "Karnataka", population: 61095297, literacyRate: 75.36, annualBudget: 275000, gdp: 18000000 },
    { id: 12, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 },
    { id: 13, name: "Madhya Pradesh", population: 72626809, literacyRate: 69.32, annualBudget: 240000, gdp: 10000000 },
    { id: 14, name: "Maharashtra", population: 112374333, literacyRate: 82.34, annualBudget: 340000, gdp: 35000000 },
    { id: 15, name: "Manipur", population: 2855794, literacyRate: 79.85, annualBudget: 32000, gdp: 600000 },
    { id: 16, name: "Meghalaya", population: 2966889, literacyRate: 75.48, annualBudget: 30000, gdp: 500000 },
    { id: 17, name: "Mizoram", population: 1097206, literacyRate: 91.33, annualBudget: 25000, gdp: 400000 },
    { id: 18, name: "Nagaland", population: 1978502, literacyRate: 79.55, annualBudget: 27000, gdp: 500000 },
    { id: 19, name: "Odisha", population: 41974218, literacyRate: 72.87, annualBudget: 200000, gdp: 8000000 },
    { id: 20, name: "Punjab", population: 27743338, literacyRate: 75.84, annualBudget: 180000, gdp: 11000000 },
    { id: 21, name: "Rajasthan", population: 68548437, literacyRate: 66.11, annualBudget: 225000, gdp: 14000000 },
    { id: 22, name: "Sikkim", population: 610577, literacyRate: 81.42, annualBudget: 15000, gdp: 200000 },
    { id: 23, name: "Tamil Nadu", population: 72147030, literacyRate: 80.09, annualBudget: 300000, gdp: 22000000 },
    { id: 24, name: "Telangana", population: 35003674, literacyRate: 72.80, annualBudget: 290000, gdp: 15000000 },
    { id: 25, name: "Tripura", population: 3673917, literacyRate: 87.22, annualBudget: 25000, gdp: 700000 },
    { id: 26, name: "Uttar Pradesh", population: 199812341, literacyRate: 67.68, annualBudget: 350000, gdp: 25000000 },
    { id: 27, name: "Uttarakhand", population: 10086292, literacyRate: 78.82, annualBudget: 60000, gdp: 3000000 },
    { id: 28, name: "West Bengal", population: 91276115, literacyRate: 76.26, annualBudget: 310000, gdp: 16000000 }
];



app.get("/states", (req, res) => {


    let state = []
    for (let i = 0; i < states.length; i++) {
        state.push(states[i].name)
    }


    res.status(200).json({
        msg: "all states found",
        data: state
    })
})
app.get("/states/highest-gdp", (req, res) => {
    const maxGdp = states.reduce((max, state) => {
        return state.gdp > max ? state.gdp : max;
    }, 0);

    res.status(200).json({
        msg: "Max GDP found",
        data: maxGdp
    });
});

app.get("/states/:id", (req, res) => {
    const id = Number(req.params.id)
    const data = states.find(state => state.id == id)
    if (!data) {
        res.status(404).json({
            msg: "data not found"
        })
    }
    res.status(200).json({
        msg: "data found",
        data: data
    })
})

app.post("/addStates", (req, res) => {
    const newStates = req.body;
    if (!Array.isArray(newStates)) {
        return res.status(400).json({
            msg: "data error"
        });
    }
    states.push(...newStates);
    res.status(201).json({
        msg: "successfully added data",
        data: newStates
    });
});

app.put("/states/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = states.findIndex(state => state.id == id);
    if (index == -1) {
        return res.status(404).json({
            msg: "not found"
        })
    }

    states[index] = {
        ...states[index],
        ...req.body,
        id
    }

    res.status(200).json({
        msg: "data updated",
        data: states[index]
    })
})


app.put("/states/:id/budget", (req, res) => {
    const id = Number(req.params.id);

    const budget = req.body.budget;

    const index = states.findIndex(state => state.id == id);
    if (index == -1) {
        return res.status(404).json({
            msg: "not found"
        })
    }

    states[index] = {
        ...states[index],

        budget
    }

    res.status(201).json({
        msg: "budget updated successfully",
        data: states[index]
    })

})




app.put('/states/:id/population', (req, res) => {
    const population = req.body.population;
    const id = Number(req.params.id)
    const index = states.findIndex(state => state.id == id);
    if (index == -1) {
        return res.status(404).json({
            msg: "not found"
        })
    }

    states[index] = {
        ...states[index],
        population
    }
    res.status(201).json({
        msg: "data updated successfully",
        data: states[index]

    })
})



app.patch("/states/:id/literacy",(req,res)=>{
    const id = Number(req.params.id);
    const literacyRate = req.body.literacyRate;
    const index = states.findIndex(state=>state.id==id)
    if(index==-1){
        return res.status(404).json({
            msg :"data not found"
        })
    }
    states[index] ={
        ...states[index],
        literacyRate
    }
    res.status(201).json({
        msg :"literacyRate updated successfully",
        data :states[index]
    })
})


app.patch("/states/:id/gdp",(req,res)=>{
    const id =  Number(req.params.id);
    const gdp = req.body.gdp;

    const index = states.findIndex(state=>state.id==id);
    if(index==-1){
        return res.status(404).json({
            msg:"data not found"
        })

    }
    
    states[index] ={
        ...states[index],
        gdp
    }
    res.status(201).json({
        msg:"updated gdp",
        data :states[index]
    })

})


app.delete("/states/:id",(req,res)=>{
    const id = Number(req.params.id);
    const index= states.findIndex(state=>state.id==id)
    if(index==-1){
        return res.status(404).json({
            msg:"data not found"

        })
    }
   const deletedData = states.splice(index,1)
  res.status(200).json({
    msg:"successfully deleted",
    
  })
})

app.delete("/states/name/:stateName",(req,res)=>{
    const stateName = req.params.stateName
    const stateIndex = states.findIndex(u=> stateName== u.name.toLowerCase());

    states.splice(stateIndex , 1);
    res.status(200).json({
        msg:"deleted successfully"
    })

    
})


app.listen(3000, () => {
    console.log("server is running in 3000 port")
})