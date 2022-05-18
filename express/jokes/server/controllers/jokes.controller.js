// option 1
const Joke = require("./../models/jokes.model")

// Get all
module.exports.allJokes = (req, res) =>{
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err=> res.json(err))
}


// Get one
module.exports.oneJoke = (req, res) =>{
    // id : req.params.id
    Joke.findOne({_id : req.params.id})
        .then(joke=>res.json(joke))
        .catch(err=>res.json(err))
}


// create
module.exports.createJoke = (req, res) =>{
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke=> res.json(joke))
        .catch(err=>res.json(err))
}

// update --  getOne + create
module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},// criteria
        req.body,// updated values
        {new: true, runValidators: true}// options
    )
        .then(joke=> res.json(joke))
        .catch(err=>res.json(err))
}

// delete
module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))
}