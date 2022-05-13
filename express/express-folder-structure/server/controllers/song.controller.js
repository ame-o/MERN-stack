//option 1
const Song = require("./../models/song.model")

//option 2
//const {Song, User} = require("./../models/song.model")

//----get all ------
module.exports.allSongs = (req,res) =>{
    Song.find()
        .then(songs => res.json(songs))
        .catch(err => res.json(err))
}

//----get one ------
module.exports.oneSong = (req,res) =>{
    //_id is from db id is from routes
    Song.findOne({_id : req.params.id})
        .then(song => res.json(song))
        .catch(err => res.json(err))
}
//----create one ------
module.exports.createSong = (req,res) =>{
    const newSong = new Song(req.body)
    Song.createSong()
        .then(song => res.json(song))
        .catch(err => res.json(err))
}
//---- update ------
module.exports.updateSong = (req,res) =>{
    Song.findOneAndUpdate(
        {_id : req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
        .then(song=> res.json(song))
        .catch(err=>res.json(err))
}

//---- delete ------
module.exports.deleteSong = (req,res) =>{
    Song.deleteSong({_id : req.params.id})
    .then(response =>res.json(response))
    .catch(err =>res.json(err)
}