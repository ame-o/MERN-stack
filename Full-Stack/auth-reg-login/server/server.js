// 1. import all dependencies
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

// config mongoose
require("./config/mongoose.config")

// config cors
    // app.use(cors()) //(old code)

// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// config express
app.use(express.json())
app.use(express.urlencoded({extended: true})) 


//config cookies
app.use(cookieParser());

// 3. routes & logic
require("./routes/auth.routes")(app)


// 4. listen to the port
app.listen(8000, ()=>console.log("Listening to the port 8000"))