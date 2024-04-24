const {Event}=require("../model/model");
const {Venue} = require('../../venue/model/venue.model')


const createEvent = async (body) => {
  try {
    const newEvent = new Event(body);
    const savedEvent = await newEvent.save();

    if (!savedEvent) throw new Error("savedEvent not saved");

    const venue = await Venue.findById(body.venue);
    venue.events.push(savedEvent._id);
    await venue.save();

    return savedEvent;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};
  
  // Get all events
  const getAllEvents = async () => {
    try {
      const events = await Event.find().populate({
        path: 'venue',
        model: 'Venue',
        select: 'name location seatingCapacity'
      });

    return events
    } catch (error) {
      throw ({ error: 'Internal server error' });
    }
  };
  
  // Get a single event by ID
  const getEventById = async (id) => {
    try {
      const event = await Event.findById(id);
      if (!event) {
        return ({ error: 'Event not found' });
      }
      return (event);
    } catch (error) {
     throw({ error: 'Internal server error' });
    }
  };
  
  // Update an event by ID
  const updateEventById = async (req, res) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedEvent) {
        throw ({ error: 'Event not found' });
      }
      return (updatedEvent);
    } catch (error) {
     throw({ error: 'Internal server error' });
    }
  };
  
  // Delete an event by ID
  const deleteEventById = async (req, res) => {
    try {
      const deletedEvent = await Event.findByIdAndDelete(req.params.id);
      if (!deletedEvent) {
        throw ({ error: 'Event not found' });
      }
      return {
        msg:"success",
        result:deletedEvent
      }
    } catch (error) {
      throw({ error: 'Internal server error' });
    }
  };
  

  module.exports={createEvent,getAllEvents,getEventById,updateEventById,deleteEventById}