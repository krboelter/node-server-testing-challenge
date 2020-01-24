const express = require("express")
const server = express()
const db = require("./data/config")

server.get("/dogs", async (req, res, next) => {
    try{
        const dogs = await db("dogs")
        res.status(200).json(dogs)
    } catch(err) {
        next(err)
    }
})

server.post("/dogs", (req, res, next) => {
    return null
})

server.delete("/dogs/:id", (req, res, next_ => {
    return null
}))

server.use((err, req, res, next) => {
    console.log("ERROR", err)
    res.status(500).json({
        message: "Something went wrong..."
    })
})

server.use(express.json())
const port = process.env.PORT || 5000

if(!module.parent) {
    server.listen(port, () => {
        console.log("Server listening at http://localhost:5000")
    })
}

module.exports = server