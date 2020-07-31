const mongoose = require("../dbConnection");

const User = new mongoose.Schema({
    lastQuirk: {
        type: Date,
        required: true,
    },
    quirks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quirk",
        required: true
    }],
    userId: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("User", User, "user");