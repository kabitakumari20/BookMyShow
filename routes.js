const venue = require("./src/module/venue/routes/venue.routes");
const booking = require("./src/module/booking/routes/booking.routes");
const user = require("./src/module/user/routes/user.routes");
const ticket=require("./src/module/ticket/routes/ticket.routes");
const event=require("./src/module/event/routes/user.routes")

module.exports = [
  {
    path: "/api/venue",
    handler: venue
  },
  {
    path: "/api/event",
    handler: event
  },
  {
    path: "/api/booking",
    handler: booking
  },
  {
    path: "/api/user",
    handler: user
  },

  {
    path: "/api/ticket",
    handler: ticket
  },
];
