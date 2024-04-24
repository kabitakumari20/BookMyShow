let express = require("express");
let router = express.Router(),
  { createVenue,
    getAllVenues,
    getVenueById,
    updateVenueById,
    deleteVenueById} = require("../controller/venue.controller");

    const { authenticate } = require("../../../middlewares/jwt.middleware");

const { wrapAsync } = require("../../../helpers/router.helper");


router.post("/createVenue", wrapAsync(createVenue));
router.get("/getallvenue", wrapAsync(getAllVenues));

module.exports = router;