const userController = require("../App/controllers/userController.js")
const quirkController = require("../App/controllers/quirkController.js")

module.exports = { 
    execute: async message => { 
        const userId = message.author.id
        var random_quirk,res;
        await userController.get(userId)
            .then(async response => {
                res = response;
                return quirkController.get();
            })
            .then(async quirks => {                
                random_quirk = quirks[Math.floor(Math.random() * quirks.length)]
                
                if(!res.length) {
                    if((Math.random() * 100) <= 15) { message.reply("Você é um sem-individualidade") } else return userController.add({ userId, quirks: random_quirk })
                } else {
                    let dataDoUltimoQuirk = new Date(res[0].lastQuirk);
                    let hoje = new Date();
                    let horas = (hoje - dataDoUltimoQuirk) / 36e5
                    let decimal = (Math.abs((process.env.quirk_time - horas)) - Math.floor((process.env.quirk_time - horas)))                    

                    if((process.env.quirk_time - horas) > 0) {
                        message.reply(`fica frio aí, ainda faltam ${(process.env.quirk_time - horas).toFixed(0)} horas e ${(decimal*60).toFixed(0)} minutos para que você possa tentar novamente.`)                        
                    } else if((Math.random() * 100) <= 15) {
                        message.reply("Você é um sem-individualidade")                        
                    } else return userController.updateLasQuirk(userId)
                }
                return;
            })
            .then(async r => {
                if(r) message.reply(`Sua individualidade é: ${random_quirk.nome}`)
                return;
            })
    }
}