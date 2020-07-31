const quirkController = require('../App/controllers/quirkController.js')
module.exports = {
    PERMISSIONS: ["ADMINISTRATOR"],
    execute: async message => {
        await quirkController
            .add(eval("(" + message.content.split(process.env.prefix)[1].split("addquirk ")[1] + ")"))
            .then(res => message.react("👍"))
            .catch(err => message.reply(err.message))
    }
}