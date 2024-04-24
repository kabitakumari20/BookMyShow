const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
    qrCode: String,
    issuedDate: Date,
    status: String // e.g., 'valid', 'used'
  },{timestamps:true,versionKey:false});


const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = { Ticket };

