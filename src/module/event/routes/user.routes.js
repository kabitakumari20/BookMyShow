let express = require("express");
let router = express.Router(),
  { createEvent,getAllEvents,getEventById,updateEventById,deleteEventById } = require("../controller/event.controller")



  const {
    authenticate
  } = require("../../../middlewares/jwt.middleware");
  const {
    wrapAsync
  } = require("../../../helpers/router.helper");

router.post("/createEvent", wrapAsync(createEvent));
router.get("/getAllEvents", wrapAsync(getAllEvents));//
router.get("/getEventById/:id", wrapAsync(getEventById));
router.delete("/deleteEventById/:id", wrapAsync(deleteEventById));
router.put("/updateEventById/:id", wrapAsync(updateEventById));


module.exports = router;
