let express = require("express");
let router = express.Router(),
  { createTicket,
    getTicketById,
    deleteTicketById,
    updateTicketById } = require("../controller/ticket.controller")

    const {
        authenticate
      } = require("../../../middlewares/jwt.middleware");
      const {
        wrapAsync
      } = require("../../../helpers/router.helper");
      
router.post("/createTicket", wrapAsync(createTicket));
router.get("/getTicketById/:id", wrapAsync(getTicketById));
router.delete("/deleteTicketById/:id", wrapAsync(deleteTicketById));
router.put("/updateTicketById/:id", wrapAsync(updateTicketById));


module.exports = router;
