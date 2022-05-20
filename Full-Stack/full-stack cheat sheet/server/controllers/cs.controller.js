// option 2: import model
const {Product} = require("../models/products.model")

//test
module.exports.testAPI = (req,res)=>{
   // res.status(400).json("Wrong message")
   res.json("Backend message")
}

// Get all
module.exports.allProducts = (req, res) =>{
    Cheat.find()
        .then(products => res.json(products))
        .catch(err=> res.status(400).json(err))
}

// create
module.exports.createProduct = (req, res) =>{
    const newProduct = req.body
    Cheat.create(newProduct)
        .then(newProduct=> res.json(newProduct))
        .catch(err=>res.status(400).json(err)) // need to make unsuccessful
}

// // Get one
module.exports.oneProduct = (req, res) =>{
    // id : req.params.id
    Cheat.findOne({_id : req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.status(400).json(err))
}

// // update --  getOne + create
module.exports.updateProduct = (req, res) =>{
    Cheat.findOneAndUpdate(
        {_id: req.params.id},// criteria
        req.body,// updated values
        {new: true, runValidators: true}// options
    )
        .then(product=> res.json(product))
        .catch(err=>res.status(400).json(err))
}

// // delete
module.exports.deleteProduct= (req, res) =>{
    Cheat.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.status(400).json(err))
}