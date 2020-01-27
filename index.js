const express = require("express")
const server = express()
const db = require("./data/config")

server.use(express.json())
server.get("/dogs", async (req, res, next) => {
    try{
        const dogs = await db("dogs")
        res.status(200).json(dogs)
    } catch(err) {
        next(err)
    }
})

function findDogById(id) {
    return db("dogs").where({ id }).first()    
}

async function add(dog) {
    const [id] = await db("dogs").insert(dog)

    return findDogById(id)
}

server.post("/dogs", async (req, res, next) => {
    try {        
        const newDog = await add(req.body)
        res.status(201).json(newDog)

    } catch(err) {
        next(err)
    }
})

server.delete("/dogs/:id", async (req, res, next) => {
    try {
        const removed = await db("dogs").del(req.params.id)
    
        res.status(200).json({
            message: "Dog has been removed."
        })
    } catch(err) {
        next(err)
    }
})

server.use((err, req, res, next) => {
    console.log("ERROR", err)
    res.status(500).json({
        message: "Something went wrong..."
    })
})

const port = process.env.PORT || 5000

if(!module.parent) {
    server.listen(port, () => {
        console.log("Server listening at http://localhost:5000")
    })
}

module.exports = server