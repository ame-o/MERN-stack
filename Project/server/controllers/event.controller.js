// option 2: import model
const {Event} = require("../models/event.model")
//test
// module.exports.testAPI = (req,res)=>{
//    // res.status(400).json("Wrong message")
//     res.json("Backend message")
// }

// Get all
module.exports.allEvents = (req, res) =>{
    Event.find()
        .then(events => res.json(events))
        .catch(err=> res.status(400).json(err))
}

// create
module.exports.createEvent = (req, res) =>{
    const newEvent = req.body
    Event.create(newEvent)
        .then(newEvent=> res.json(newEvent))
        .catch(err=>res.status(400).json(err)) // need to make unsuccessful
}

// // Get one
module.exports.oneEvent = (req, res) =>{
    // id : req.params.id
    Event.findOne({_id : req.params.id})
        .then(event=>res.json(event))
        .catch(err=>res.status(400).json(err))
}

// // update --  getOne + create
module.exports.updateEvent = (req, res) =>{
    Event.findOneAndUpdate(
        {_id: req.params.id},// criteria
        req.body,// updated values
        {new: true, runValidators: true}// options
    )
        .then(event=> res.json(event))
        .catch(err=>res.status(400).json(err))
}

// // delete
module.exports.deleteEvent = (req, res) =>{
    Event.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.status(400).json(err))
}