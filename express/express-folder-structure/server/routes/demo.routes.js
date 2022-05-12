module.exports = (app) => {

const users = [
    {name: "person1"},
    {name: "person2"}

]
//function with two params: request and response (ORDER MATTERS!)
app.get("/api",(req,res) =>{
    //req: what we receive
    //res: what we send out

    //usually we send json to the database
    res.json({message:"Hello World"})
})

//=============FULL CRUD=====================

//GET (READ) ALL
app.get("api.users",(req, res)=>{
    res.json(users)
})


//POST -(CREATE)
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});

//GET ONE
app.get("/api/users/:id", (req, res) =>{
    const id = req.params.id //desctructuring to be only one line
    res.json(users[id])
})

// PUT (UPDATE) - get one + create
app.put("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json(users[id])
})


//DELETE (DELETE)
app.delete("api/users/:id")
    const id = req.params.id
    users.splice(id,1)
    res.json({status: "ok"}) //response is required, however... 
    // what is the  response is optional, even emojis
}