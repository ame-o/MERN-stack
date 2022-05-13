//------------ 1. import all dependencies -------
const express = require("express")
const app = express()

//--------------2. config express----------------
//mongoose
require("./configs/mongoose.config")

//enabling a dataType called json
app.use( express.json() );
//need to state the POST type accepted 
app.use( express.urlencoded({ extended: true }) );

//------------3. routes & logic -----------------
require("./routes/song.routes")(app)


//------------- 4. listen to the port -----------------
//port is conventional, not strictly only 8000
//this line runs the server
app.listen(8000,()=> console.log(`Listening to port:8000`))
