const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  TripTitle: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Date:String,
  Time :String,
  ImageUrl:String  
});

const Trips = mongoose.model("Trips", TripSchema);
module.exports = Trips;