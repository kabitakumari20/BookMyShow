const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    venue: { type: mongoose.Schema.Types.ObjectId, ref: "Venue" },
    timings: [Date],
    price: Number,
  },
  { timestamps: true, versionKey: false }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
