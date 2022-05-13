// ======= dependencies / imports ===================
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

//config
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// ============= * * * USER * * *====================================
class User{
    constructor( password, email, phoneNumber, lastName, firstName, id){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.phoneNumber = phoneNumber
        this.id = id
    }
}
    
const users = []

//========== display / render / read all =====================
app.get("/api/users", (req, res) => {
    res.json(users);
});

//========= create route ========================
app.post("/api/users/new"), (req, res) =>{
    //add attributes from faker api
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    const phoneNumber = faker.phone.phoneNumber()
    const id = faker.random.numeric()

    //instantiate
    const newUser = new User(password, email, phoneNumber, lastName, firstName, id)
    //add to list of users
    users.push(newUser)
    res.json(newUser)
}

// =========== PUT (UPDATE) - get one + create ===============
app.put("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json(users[id])
})


// =========== DELETE (DELETE) =============================
app.delete("api/users/:id")
    const id = req.params.id
    users.splice(id,1)
    res.json({status: "ok"}) //response is required, however... 
    // what is the  response is optional, even emojis


//==============* * * COMPANY * * * ============================

class Company{
    constructor(id, name, address, street, city, state, zipCode, country){
        this.id = id
        this.name = name
        this.address = address
        this.city = city
        this.state = state
        this.zipCode = zipCode
        this.country = country
    }
}

const companies = []

//========== display / render / read all =====================
app.get("/api/companies", (req, res) => {
    res.json(companies);
});

//========= create route ========================
app.post("/api/companies/new"), (req, res) =>{
    //add attributes from faker api
    const id = faker.random.numeric()
    const name = faker.company.name()
    const address = faker.address.streetAddress()
    const city = faker.address.city()
    const state = faker.address.state()
    const zipCode = faker.address.zipCode()
    const country = faker.address.country()

    //instantiate
    const newCompany = new Company(id, name, address, city, state, zipCode, country)
    //add to list of companies
    companies.push(newCompany)
    res.json(newCompany)
}

// =========== PUT (UPDATE) - get one + create ===============
app.put("/api/companies/:id", (req, res)=>{
    const id = req.params.id
    companies[id] = req.body
    res.json(companies[id])
})


// =========== DELETE (DELETE) =============================
app.delete("api/companies/:id")
    const c_id = req.params.id
    users.splice(c_id,1)
    res.json({status: "ok"}) //response is required, however... 
    // what is the  response is optional, even emojis


//=========  COMBINED create route ========================
app.post("/api/user/company"), (req, res) =>{
    //add user attributes from faker api
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    const phoneNumber = faker.phone.phoneNumber()
    const id = faker.random.numeric()

    //add company attributes from faker api
    const c_id = faker.random.numeric()
    const name = faker.company.name()
    const address = faker.address.streetAddress()
    const city = faker.address.city()
    const state = faker.address.state()
    const zipCode = faker.address.zipCode()
    const country = faker.address.country()
    
    //instantiate
    const newUser = new User(password, email, phoneNumber, lastName, firstName, id)
    //instantiate
    const newCompany = new Company(c_id, name, address, city, state, zipCode, country)
    
    //add to list of users
    users.push(newUser)
    //add to list of companies
    companies.push(newCompany)
    res.json(newCompany, newUser)
}



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
