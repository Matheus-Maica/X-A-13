const userController = require("../App/controllers/userController.js")
const quirkController = require("../App/controllers/quirkController.js")
const { getRandomQuirk, timeSinceLastQuirk } = require("../Funcoes")

module.exports = { 
    execute: async message => { 
        const userId = message.author.id
        var res,rquirk;

        await userController.get(userId)
            .then(async response => {
                res = response;
                return quirkController.get();
            })
            .then(async quirks => {                
                var {random_quirk, quirkless} = getRandomQuirk(quirks)
                rquirk = random_quirk;
                if(quirkless) message.reply("Você é um sem-individualidade")

                if(!res.length) {                    
                    return userController.add({ userId, quirks: random_quirk, quirkless })
                } else {                    
                    var canQuirkAwaken = timeSinceLastQuirk(res, message);

                    if(canQuirkAwaken && quirkless) {                        
                        await userController.updateLasQuirk(userId, random_quirk, quirkless)
                    } else if(canQuirkAwaken) {
                        return userController.updateLasQuirk(userId, random_quirk, quirkless)
                    }
                }
                return;
            })
            .then(async r => {            
                if(r) message.reply(`Sua individualidade é: ${rquirk.nome}`)
                return;
            })
    }
}