const mongoose = require("../dbConnection");
const Quirk = require("./quirks")
const User = new mongoose.Schema({
    lastQuirk: { type: Date, required: true },
    quirks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quirk", required: true }],
    userId: { type: String, required: true },
    quirkless: { type: Boolean, default: false }
});
module.exports = mongoose.model("User", User, "user");