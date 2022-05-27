// option 1: import model
//const CheatSheet = require("../models/cs.model")
const UserController = require("../controllers/user.controller")
const {authenticate} = require('../config/jwt.config')

// option 2: import model
// const CheatSheetController = require("../controllers/cs.controller")

module.exports = (app) =>{
    app.get("/api/test", UserController.testAPI)
    app.get(`/api/allUsers`, authenticate, UserController.index)
    app.get(`/api/cookies`, UserController.cookies)
    app.post(`/api/register`, UserController.register)
    app.post(`/api/login`, UserController.login)
    app.get(`/api/logout`, UserController.logout)
    // app.get("/api/cheatsheet", CheatSheetController.allCheatSheets)
    // app.post("/api/cheatsheet", CheatSheetController.createCheatSheet)
    // app.get("/api/cheatsheet/:id",CheatSheetController.oneCheatSheet)
    // app.put("/api/cheatsheet/:id",CheatSheetController.updateCheatSheet)
    // app.delete("/api/cheatsheet/:id",CheatSheetController.deleteCheatSheet)
}