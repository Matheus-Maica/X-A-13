const quirkController = require('../App/controllers/quirkController.js')
module.exports = {
    PERMISSIONS: ["ADMINISTRATOR"],
    default: message => message.reply("Adicione uma nova individualidade através deste comando. Exemplo abaixo: \n\n*addquirk {nome: 'teste', descricao: 'teste', tipo: 'Emissão', defesa: 5, ataque:5, crit_chance: 0.1, controlChance: 0.1, agilidade: 0.1, precisao: 0.05, funcaoprimaria: 'ofensiva', funcaosecundaria: 'ofensiva'}\n\n *funcaosecundaria É OPCIONAL!*"),
    execute: async message => {        
        await quirkController
            .add(eval("(" + message.content.split(process.env.prefix)[1].split("addquirk ")[1] + ")"))
            .then(res => message.react("👍"))
            .catch(err => message.reply(err.message))
    }
}