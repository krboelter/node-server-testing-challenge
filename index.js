const express = require("express")
const server = express()



server.use(express.json())
const port = process.env.PORT || 5000
server.listen(port, () => {
    console.log("Server listening at http://localhost:5000")
})