const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    }
}, {timestamps: true}) //for created at & updated at

// option 2
module.exports.Author = mongoose.model('Author', AuthorSchema);