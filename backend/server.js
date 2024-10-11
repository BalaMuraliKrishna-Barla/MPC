const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({path: '../.env'})
const app = express()

const port = process.env.PORT || 5003
app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }));


//routes
app.get('/', (req, res) => res.send(`get API is working!`))


// turn on the server
app.listen(port, () => console.log(`Server is running in the port ${port}`))