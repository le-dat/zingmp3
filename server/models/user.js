const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, max: 50, min: 10, required: true, unique: true },
  likedAlbum: Array,
  likedSong: Array,
});

module.exports = mongoose.model("user", userSchema);
