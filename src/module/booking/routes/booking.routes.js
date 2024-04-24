let express = require("express");
let router = express.Router(),
  { createBooking,getAllBookings,getBookingById,deleteBookingById,updateBookingById } = require("../controller/booking.controller")

  const {
    authenticate
  } = require("../../../middlewares/jwt.middleware");
  const {
    wrapAsync
  } = require("../../../helpers/router.helper");
router.post("/createBooking", wrapAsync(createBooking));
router.get("/getBookingById/:id", wrapAsync(getBookingById));
router.get("/getAllBookings", wrapAsync(getAllBookings));
router.delete("/deleteBookingById/:id", wrapAsync(deleteBookingById));
router.put("/updateBookingById/:id", wrapAsync(updateBookingById));


module.exports = router;
