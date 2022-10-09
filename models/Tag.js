const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  projectsId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
  ],
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
