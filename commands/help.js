const Discord = require("discord.js")
module.exports = {    
    execute: message => {
        const example = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('BOKU NO HERO BOT')
            .setThumbnail('https://i.imgur.com/WdgxEnF.png')
            .setDescription('Olá, eu sou X Æ A-13, o filho bastardo do CEO da Tesla e SpaceX, meu pai não me aceita em casa pois eu não tenho um corpo físico, já que sou um BOT 🥺😔, então passo meu tempo assistindo boku no hero e criando um minigame do anime para as outras pessoas se divertirem. Confira os comandos:')
            .addFields(
                { name: '• Caso queira saber a sintaxe e utilidade de determinado comando de maneira mais detalhada apenas digite:', value: '*<comando>' },
                { name: '\u200B', value: '\u200B' },
                { name: `• ${process.env.prefix}addquirk`, value: `${process.env.prefix}addquirk <objeto js>` },
                { name: `• ${process.env.prefix}rmquirk`, value: `${process.env.prefix}rmquirk <quirk>` },
                { name: `• ${process.env.prefix}addcommand`, value: `${process.env.prefix}addcommand <código javascript>` },
                { name: `• ${process.env.prefix}removecommand`, value: `${process.env.prefix}removecommand <comando>` },
                { name: `• ${process.env.prefix}quirkquiz`, value: `${process.env.prefix}quizquirk` },
                { name: `• ${process.env.prefix}voteban`, value: `${process.env.prefix}voteban <usuario>` },
                { name: `• ${process.env.prefix}quirkawaken`, value: `${process.env.prefix}quirkawaken` },
                { name: `• ${process.env.prefix}quirk`, value: `${process.env.prefix}quirk <usuario> || ${process.env.prefix}quirk` },
                { name: `• ${process.env.prefix}status`, value: `${process.env.prefix}status <usuario>` },                
                { name: '\u200B', value: '\u200B' },
                { name: 'Adicione meu pai ao sv também:', value: 'https://discord.com/api/oauth2/authorize?client_id=738715428398039052&permissions=0&scope=bot', inline: true },
                { name: 'Não se esqueça da aula online', value: 'https://pucpr.blackboard.com/', inline: true },
            )
            .setTimestamp()            
            .setFooter('-X Æ A-13', 'https://i.imgur.com/WdgxEnF.png');
        
        return message.channel.send(example);
    }
}