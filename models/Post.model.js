const { default: mongoose, Schema } = require("mongoose");

let PostSchema = new Schema({
  title: String,
});

module.exports = mongoose.model("Post", PostSchema);
