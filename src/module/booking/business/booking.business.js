const { models } = require("mongoose");
const {Booking}=require("../model/booking.model")


const createBooking = async (body) => {
    console.log("body=======",body)
    try {
      const newBooking = new Booking(body);
      console.log("newBooking============>>",newBooking)
      const savedBooking = await newBooking.save();
      console.log("newBooking=========>>",newBooking)
      if(!savedBooking) throw "savedBooking not saved"
      return savedBooking
    } catch (error) {
      throw({ error: 'Bad request' });
    }
  };
  
  // Get all bookings
  const getAllBookings = async () => {
    try {
      const bookings = await Booking.find()
        .populate({
          path: 'user',
          model: 'User'
        })
        .populate({
          path: 'event',
          model: 'Event',
          populate: {
            path: 'venue',
            model: 'Venue',
          }
        });
      return bookings;
    } catch (error) {
      throw { error: 'Internal server error' };
    }
  };
  
  // Get a single booking by ID
  const getBookingById = async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Update a booking by ID
  const updateBookingById = async (req, res) => {
    try {
      const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBooking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.json(updatedBooking);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Delete a booking by ID
  const deleteBookingById = async (req, res) => {
    try {
      const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
      if (!deletedBooking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };



module.exports={createBooking,getAllBookings,getBookingById,deleteBookingById,updateBookingById}