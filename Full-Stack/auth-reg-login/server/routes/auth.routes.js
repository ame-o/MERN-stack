// option 1: import model
const UserController = require("../controllers/user.controller")
const EventController = require("../controllers/event.controller")
const {authenticate} = require('../config/jwt.config')

module.exports = (app) =>{
    app.get(`/api/users/allUsers`, authenticate, UserController.index)
    app.get(`/api/users/cookie`, UserController.cookie)
    app.post(`/api/users/register`, UserController.register)
    app.post(`/api/users/login`, UserController.login)
    app.get(`/api/users/logout`, UserController.logout)
    app.get("/api/events/", EventController.allEvents)
    app.post("/api/events", EventController.createEvent)
    app.get("/api/events/:id",EventController.oneEvent)
    app.put("/api/events/:id",EventController.updateEvent)
    app.delete("/api/events/delete/:id",EventController.deleteEvent)
}