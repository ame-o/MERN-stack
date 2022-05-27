//imports
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: {
    type: String,
    required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
        default: Date.now
    },
    city:{
        type: String,
        required: [true, "City is required"]
    },
    country:{
        type: String,
        required: [true, "Country is required"]
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        // required: true,
        ref: "User"
    },
    url:{
        type: String
    },
    longitude:{
        type: Number
    },
    latitude:{
        type: Number
    }
}, {timestamps: true});

// REGISTER THE SCHEMA
module.exports.Event = mongoose.model("Event", EventSchema)