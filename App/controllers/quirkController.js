const Quirk = require("../models/quirks.js")

module.exports = {
    add: async data => {
        const { nome, descricao, tipo, defesa, ataque, dodge_chance, funcaoprimaria, controlChance, crit_chance, funcaosecundaria } = data;
        if(funcaosecundaria) {
            return Quirk.create({
                nome,
                descricao,
                tipo,
                defesa,
                ataque,
                dodge_chance,
                funcaoprimaria,
                controlChance,
                crit_chance,
                funcaosecundaria
            })
        } else {
            return Quirk.create({
                nome,
                descricao,
                tipo,
                defesa,
                ataque,
                dodge_chance,
                funcaoprimaria,
                controlChance,
                crit_chance
            })            
        }
    },
    get: async () => Quirk.find({}),
    rm: async query => Quirk.findOneAndRemove({ nome: query }),
    getbyid: async id => Quirk.findById(id)
}