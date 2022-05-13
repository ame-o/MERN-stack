const mongoose = require("mongoose")

const SongSchema = new mongoose.Schema ({
     title:{
         type: String,
         required: {true, "Title is required"}
         
     }
}), {timestamps:true})

const Song = mongoose.model('Song', SongSchema);

//option 1 for export
module.exports = Song;

//option 2 for export
// module.exports.Song = mongoose.model('Song', SongSchema)

//needs to be destructured if used
//useful if there is multiple tables in 1 file and only need to export 1 specficially