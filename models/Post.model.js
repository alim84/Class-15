const { default: mongoose, Schema } = require("mongoose");

let Post = new Schema({
  title: String,
});

module.exports = mongoose.model("Post", Post);
