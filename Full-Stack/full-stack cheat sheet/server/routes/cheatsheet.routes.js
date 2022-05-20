// option 1: import model
//const CheatSheet = require("../models/cs.model")

// option 2: import model
const CheatSheetController = require("../controllers/cs.controller")

module.exports = (app) =>{
    // app.get("/api/test", CheatSheetController.testAPI)
    app.get("/api/cheatsheet", CheatSheetController.allCheatSheets)
    app.post("/api/cheatsheet", CheatSheetController.createCheatSheet)
    app.get("/api/cheatsheet/:id",CheatSheetController.oneCheatSheet)
    app.put("/api/cheatsheet/:id",CheatSheetController.updateCheatSheet)
    app.delete("/api/cheatsheet/:id",CheatSheetController.deleteCheatSheet)
}