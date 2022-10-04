const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    categories: [
      {
        type: String,
        required: true,
      },
    ],
    des: [String],
    tags: [String],
    status: {
      type: String,
      enum: ["Not_Started", "In_Progress", "Completed"],
      default: "Not_Started",
    },
    clientId: {
      type: mongoose.Types.ObjectId,
      ref: "People",
    },
    live_site: {
      type: String,
    },
    client_repo: {
      type: String,
    },
    server_repo: {
      type: String,
    },
    thumb_img: {
      type: String,
    },
    sub_img: [String],
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
