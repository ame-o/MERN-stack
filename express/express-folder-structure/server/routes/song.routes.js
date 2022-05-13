const SongController = require("./../controllers/song.controller")

module.exports = (app) => {
    app.get("api/songs", SongController.allSongs)
    app.get("/api/songs/:id", SongController.oneSong)
    app.post("/api/songs", SongController.createSong)
    app.put("/api/songs/:id", SongController.updateSong)
    app.delete("/api/songs/:id",SongController.deleteSong)
}