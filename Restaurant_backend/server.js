const express = require('express')
const app = express()
const dotenv = require('dotenv')
// const connectDB = require('./utilities/connection.js')
const productRoutes = require('./routes/productRoutes')
const cors = require('cors')
dotenv.config()
// connectDB()
app.use(cors({ origin: "*" }))
app.use(express.json())
app.use("/products", productRoutes)

app.get('/', (req, res, next) => {
    res.send("welcome to resturant api")

})



const port = process.env.Port
app.listen(port, () => {
    console.log("listening to port number", port)
})


