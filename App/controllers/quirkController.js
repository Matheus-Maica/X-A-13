const Quirk = require("../models/quirks.js")

module.exports = {
    add: async data => {
        const { nome, descricao, tipo, defesa, ataque, funcaoprimaria, controlChance, crit_chance, funcaosecundaria, precisao, agilidade } = data;
        if(funcaosecundaria) {
            return Quirk.create({
                nome,
                descricao,
                tipo,
                defesa,
                ataque,                
                funcaoprimaria,
                controlChance,
                crit_chance,
                funcaosecundaria,
                precisao,
                agilidade
            })
        } else {
            return Quirk.create({
                nome,
                descricao,
                tipo,
                defesa,
                ataque,                
                funcaoprimaria,
                controlChance,
                crit_chance,
                precisao,
                agilidade
            })            
        }
    },
    get: async () => Quirk.find({}),
    rm: async query => Quirk.findOneAndDelete({ nome: query }),
    getbyid: async id => Quirk.findById(id)
}