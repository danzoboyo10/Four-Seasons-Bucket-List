// require dependencies
const mongoose = require('mongoose');
// initialize shortcut variable
const Schema = mongoose.Schema;

// initialize schema
const seasonSchema = new Schema({
    season: {type: String, required: true},
    title: {type: String, required: true},
    description:{type: String, required: true},
    img: {type:String, required: true},
    price:{type: String, required: true},
    completed: Boolean,
    });

// export our model
const Season = mongoose.model('Season', seasonSchema)
module.exports = Season;


// ^-- this code takes a schema and turns it into a model
// this will provide us with a bunch of special methods

