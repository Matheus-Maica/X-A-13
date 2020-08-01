const User = require("../models/users.js")

module.exports = {
    add: async data => {
        const { userId, quirks } = data
        return User.create({lastQuirk: new Date(),userId,quirks})
    },
    get: async userId => await User.find({ userId: userId }).populate("quirks"),
    updateLasQuirk: async (userId, quirks, quirkless=false) => User.findOneAndUpdate({ userId: userId }, { lastQuirk: new Date(), quirks: quirks, quirkless: quirkless }),
}