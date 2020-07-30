const User = require("../models/users.js")

module.exports = {
    add: async data => {
        return new Promise(async (resolve, reject) => {
            try {
                const { userId, quirks } = data

                const user = User.create({
                    lastQuirk: new Date(),
                    userId,
                    quirks
                })

                resolve(user);
            } catch(err) {
                reject(err)
            }
        })
    },
    get: async userId => {
        return User.find({ userId: userId })
    },
    updateLasQuirk: async userId => {
        return User.findOneAndUpdate({ userId: userId }, { lastQuirk: new Date() })
    }
}