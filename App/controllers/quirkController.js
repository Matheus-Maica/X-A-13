const Quirk = require("../models/quirks.js")

module.exports = {
    add: async data => {
        const {nome, descricao, tipo, defesa, ataque, dodge_chance} = data;
            
        const quirk = await Quirk.create({
            nome,
            descricao,
            tipo,
            defesa,
            ataque,
            dodge_chance
        })
        
        return quirk;
    },
    get: async () => {
        return Quirk.find({});
    }
}