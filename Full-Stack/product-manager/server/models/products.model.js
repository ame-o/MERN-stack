const mongoose = require("mongoose")

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 3 characters"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "Price cannot be left blank"]
    },
    description:{
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    }
}, {timestamps: true}) //for created at & updated at

// option 2
module.exports.Product = mongoose.model('Product', ProductsSchema);
