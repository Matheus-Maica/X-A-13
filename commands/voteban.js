module.exports = {
    PERMISSIONS: ["BAN_MEMBERS"],
    default: message => message.reply("Inicie uma votação democrática para decidir o banimento de um usuário (só pode ser executado por usuários com permissão para isso). *voteban @Usuario"),
    execute: message => {
        if(!message.mentions.users.first()) {
            message.reply("usuário inválido :person_in_manual_wheelchair:")
        } else {
            message.channel.send(`${message.mentions.users.first()} está sob julgamento, reaja com ⚰️ se você apoia esse ban (7 votos necessários)`)
                .then(mess => {
                    mess.react("⚰️")
                        .then(m => {
                            return mess.awaitReactions((reaction, user) => ['⚰️'].includes(reaction.emoji.name), { max: 7, time: 60000*3, errors: ['time'] })
                        })
                        .then(async collected => {
                            if(message.guild.members.cache.get(message.mentions.users.first().id).hasPermission("ADMINISTRATOR")) {
                                message.channel.send("Eu n tenho permissão pra banir esse usuário...");
                                return;
                            } else {
                                let user = message.guild.members.cache.get(message.mentions.users.first().id);
                                if(user === message.author) return message.reply("você não pode banir si mesmo");
                                message.channel.send(`Chegou o Uber do ${message.mentions.users.first()}, tão chamando lá 🚗.`)
                                return await message.mentions.members.first().ban()
                            }
                        })
                        .catch(error => {
                            console.log(error)
                            message.channel.send("Meta não atingida ☂️, comando cancelado.");
                            return;
                        })
                })            
        }
    }
}