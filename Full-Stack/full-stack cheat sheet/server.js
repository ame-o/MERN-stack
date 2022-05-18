// 1. import all dependencies
const express = require("express")
const app = express()

// 2.1 config mongoose
require("./config/mongoose.config")
//2.2 config cors
app.use(cors())
// 2.3. config express
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

// 3. routes & logic
require("./routes/products.routes")(app)

// 4. listen to the port
app.listen(8000, ()=>console.log("Listening to the port 8000"))