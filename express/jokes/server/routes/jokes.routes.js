const JokeController = require("./../controllers/jokes.controller")


module.exports = (app) => {
    // app.get("/api", JokeController.test)
    app.get("/api/jokes", JokeController.allJokes)
    app.post("/api/jokes", JokeController.createJoke)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}