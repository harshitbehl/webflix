const mongoose = require("mongoose");

// Constructor Function
// Pass in object with schema as a first parameter and second parameter is optional object
const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    imgTitle: {
      type: String,
    },
    imgThumbnail: {
      type: String,
    },
    trailer: {
      type: String,
    },
    video: {
      type: String,
    },
    rating: {
      type: String,
    },
    duration: {
      type: String,
    },
    genre: {
      type: String,
    },
    isTvShow: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
