const {createBooking,getAllBookings,getBookingById,deleteBookingById,updateBookingById}=require("../business/booking.business")



exports.createBooking = async req => await createBooking(req.body)
exports.getAllBookings = async req => await getAllBookings(req.body)
