// option 2: import model
const {Product} = require("../models/products.model")

//test
module.exports.testAPI = (req,res)=>{
   // res.status(400).json("Wrong message")
   res.json("Backend message")
}

// Get all
module.exports.allProducts = (req, res) =>{
    Product.find()
        .then(products => res.json(products))
        .catch(err=> res.json(err))
}


// // Get one
// module.exports.oneProduct = (req, res) =>{
//     // id : req.params.id
//     Product.findOne({_id : req.params.id})
//         .then(product=>res.json(product))
//         .catch(err=>res.json(err))
// }


// create
module.exports.createProduct = (req, res) =>{
    const newProduct = req.body
    Product.create(newProduct)
        .then(newProduct=> res.json(newProduct))
        .catch(err=>res.json(err))
}

// // update --  getOne + create
// module.exports.updateProduct = (req, res) =>{
//     Product.findOneAndUpdate(
//         {_id: req.params.id},// criteria
//         req.body,// updated values
//         {new: true, runValidators: true}// options
//     )
//         .then(product=> res.json(product))
//         .catch(err=>res.json(err))
// }

// // delete
// module.exports.deleteProduct= (req, res) =>{
//     Product.deleteOne({_id: req.params.id})
//         .then(status=> res.json(status))
//         .catch(err=>res.json(err))
// }