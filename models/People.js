// external imports
const { Schema, model } = require("mongoose");

// schema
const peopleSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER", "EDITOR", "MODERATOR"],
    },
    cloudinary_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// model
const People = model("People", peopleSchema);

module.exports = People;
