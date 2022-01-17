const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      first: String,
      last: String,
      required: true,
    },
    email: {
      type: email,
     required: true,
    },
    mobile: {
      type: String,
      required: true,
      min: 10,
      max: 10,
    },
    role: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
