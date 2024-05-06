import mongoose, { Schema } from "mongoose";

const beerSchema = new Schema({
  name: String,
  brand: String,
  flavour: String,
  alcoholPercentage: Number,
  yearsAged: Number,
  country: String,
});

const Beer = mongoose.model("beer", beerSchema);

export default Beer;
