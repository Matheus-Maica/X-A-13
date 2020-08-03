module.exports = {
    PERMISSIONS: ["BAN_MEMBERS"],
    default: message => message.reply("Inicie uma votação democrática para decidir o banimento de um usuário (só pode ser executado por usuários com permissão para isso). *voteban @Usuario"),
    execute: message => {
        if(!message.mentions.users.first()) {
            message.reply("você fez alguma merda no comando. Esqueceu de colocar o usuário? Tentou mencionar @everyone ou @here?")
        } else {            
            message.channel.send(`${message.mentions.users.first()} está sob julgamento, reaja com ⚰️ se você apoia esse ban (${Math.round((message.guild.members.cache.filter(member => !member.user.bot).size)*0.15)} votos necessários)`)
                .then(mess => {
                    mess.react("⚰️")
                        .then(m => {
                            mess.awaitReactions((reaction, user) => ['⚰️'].includes(reaction.emoji.name), { max: Math.round((message.guild.members.cache.filter(member => !member.user.bot).size)*0.15), time: 60000*3, errors: ['time'] })
                                .then(async collected => {                                    
                                    if(message.guild.members.cache.get(message.mentions.users.first().id).hasPermission("ADMINISTRATOR")) {
                                        message.channel.send("Eu n tenho permissão pra banir esse usuário...");
                                        return;
                                    } else {
                                        let user = message.guild.members.cache.get(message.mentions.users.first().id);
                                        if(user === message.author) return message.reply("você não pode banir si mesmo");
                                        user.ban({reason: "vai chorar?"})
                                        return message.channel.send(`Chegou o Uber do ${message.mentions.users.first()}, tão chamando lá 🚗.`)
                                    }
                                })
                                .catch(collected => {
                                    console.log(collected)                                    
                                    //message.channel.send("Meta não atingida ☂️, comando cancelado.");
                                    return;
                                })
                        })
                })            
        }
    }
}