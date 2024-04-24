const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: String,
    location: String,
    seatingCapacity: Number,
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
  },{timestamps:true,versionKey:false});


const Venue = mongoose.model('Venue', venueSchema);

module.exports = { Venue};

