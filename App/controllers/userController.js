const User = require("../models/users.js")

module.exports = {
    add: async data => {
        const { userId, quirks } = data

        return User.create({
            lastQuirk: new Date(),
            userId,
            quirks
        })                
    },
    get: async userId => User.find({ userId: userId }),
    updateLasQuirk: async userId => User.findOneAndUpdate({ userId: userId }, { lastQuirk: new Date() })
}