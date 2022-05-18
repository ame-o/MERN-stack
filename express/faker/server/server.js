// ======= dependencies / imports ===================
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

//config
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// ============= * * * USER * * *====================================
//add attributes from faker api
class User{
    constructor(){
        this.password = faker.internet.password()
        this.email =  faker.internet.email()
        this.phoneNumber = faker.phone.phoneNumber()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.random.numeric()
    }
}

const users = []
//========= create route ========================
app.get("/api/users/new"), (req, res) =>{
    //instantiate
    const newUser = new User()

    //add to list of users
    users.push(newUser)
    res.json(newUser)
}

//==============* * * COMPANY * * * ============================

class Company{
    constructor(){
        this._id = faker.random.numeric()
        this.name = faker.company.name()
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

const companies = []


//========= create route ========================
app.post("/api/companies/new"), (req, res) =>{
    //instantiate
    const newCompany = new Company()

    //add to list of companies
    companies.push(newCompany)
    res.json(newCompany)
}

//========= * * * COMBINED create route * * * =======================
app.post("/api/users/companies"), (req, res) =>{
    //instantiate
    const newCompany = new Company()
    const newUser = new User()
    res.json(newCompany,newUser)
}



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
;