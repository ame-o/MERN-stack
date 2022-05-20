// option 2: import model
const {Author} = require("../models/author.model")
//test
// module.exports.testAPI = (req,res)=>{
//    // res.status(400).json("Wrong message")
//     res.json("Backend message")
// }

// Get all
module.exports.allAuthors = (req, res) =>{
    Author.find()
        .then(authors => res.json(authors))
        .catch(err=> res.status(400).json(err))
}

// create
module.exports.createAuthor = (req, res) =>{
    const newAuthor = req.body
    Author.create(newAuthor)
        .then(newAuthor=> res.json(newAuthor))
        .catch(err=>res.status(400).json(err)) // need to make unsuccessful
}

// // Get one
module.exports.oneAuthor = (req, res) =>{
    // id : req.params.id
    Author.findOne({_id : req.params.id})
        .then(author=>res.json(author))
        .catch(err=>res.status(400).json(err))
}

// // update --  getOne + create
module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate(
        {_id: req.params.id},// criteria
        req.body,// updated values
        {new: true, runValidators: true}// options
    )
        .then(author=> res.json(author))
        .catch(err=>res.status(400).json(err))
}

// // delete
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.status(400).json(err))
}