const {Venue}=require("../model/venue.model")
const {Event} = require('../../event/model/model')
const createVenue = async (body) => {
    try {
      const newVenue = new Venue(body);
      const savedVenue = await newVenue.save();
     return(savedVenue);
    } catch (error) {
      // res.status(400).json({ error: 'Bad request' });
      console.log(error)
    }
  };
  
  // Get all venues
  const getAllVenues = async (req, res) => {
    try {
      const venues = await Venue.find().populate({
        path: 'events',
        model: 'Event',
        select : 'title description timmings price -_id'
      });;
      return(venues);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Get a single venue by ID
  const getVenueById = async (req, res) => {
    try {
      const venue = await Venue.findById(req.params.id);
      if (!venue) {
        throw ({ error: 'Venue not found' });
      }
      return(venue);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Update a venue by ID
  const updateVenueById = async (req, res) => {
    try {
      const updatedVenue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedVenue) {
        return res.status(404).json({ error: 'Venue not found' });
      }
      res.json(updatedVenue);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Delete a venue by ID
  const deleteVenueById = async (req, res) => {
    try {
      const deletedVenue = await Venue.findByIdAndDelete(req.params.id);
      if (!deletedVenue) {
        return res.status(404).json({ error: 'Venue not found' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  module.exports = {
    createVenue,
    getAllVenues,
    getVenueById,
    updateVenueById,
    deleteVenueById
  };
  