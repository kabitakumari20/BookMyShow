const mongoose = require("mongoose");
let MONGODB_URI = 'mongodb://127.0.0.1:27017/Booking';

function connectToDatabase() {
  mongoose.set('debug', true);

  return mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = connectToDatabase;
