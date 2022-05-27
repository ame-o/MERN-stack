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
    startDate: {
        type: String,
        required: [true, "Start Date is required"],
        default: Date.now
    },
    // endDate: {
    //     type: Date,
    //     required: [true, "End Date is required"],
    //     default: Date.now
    // },
    city:{
        type: String,
        required: [true, "City is required"]
    },
    country:{
        type: String,
        required: [true, "Country is required"]
    },
    // user: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "User"
    // },
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