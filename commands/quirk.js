const userController = require('../App/controllers/userController.js')
module.exports = {    
    execute: async message => {    
        const obj = require("../Funcoes")
        const user = await userController.get(message.author.id)    
        const member = message.author;
        const embedMessage = obj.embed(user[0].quirks[0], member)
        return message.reply(embedMessage)
    }
}