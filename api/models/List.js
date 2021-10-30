const mongoose = require("mongoose");

// Constructor Function
// Pass in object with schema as a first parameter and second parameter is optional object
const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
    },

    genre: {
      type: String,
    },
    content: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", ListSchema);
module.exports = List;
