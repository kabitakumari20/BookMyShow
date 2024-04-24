const { createVenue,
    getAllVenues,
    getVenueById,
    updateVenueById,
    deleteVenueById } = require("../business/venue.business");

exports.createVenue = async req => await createVenue(req.body)
exports.getAllVenues = async req => await getAllVenues();
