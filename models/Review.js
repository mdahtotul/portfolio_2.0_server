const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  reviewer: {
    id: mongoose.Types.ObjectId,
    ref: "People",
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
