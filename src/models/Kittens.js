// shape data
const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
    name: String,
});
const Kitten = mongoose.model("eric", kittySchema);

module.exports = Kitten;
