const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    seats: [String],
    bookingTime: Date,
    status: { type: String, enum: ["confirmed", "cancelled"] },
  },
  { timestamps: true, versionKey: false }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = { Booking };
