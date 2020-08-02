const Discord = require("discord.js");
const quirk = require("../commands/quirk");

var functions = {
    randNum: arr => {        
        var excludeNum = arr.indexOf(arr.filter(b => b.nome === '0')[0])    
        var randNumber = Math.floor(Math.random()*arr.length);
        if(randNumber===excludeNum){
            return functions.randNum(arr);
        } else {
            return arr[randNumber];
        }        
    },
    getRandomQuirk: quirks => {
        var random_quirk = functions.randNum(quirks);
        var quirkless = false;
        if(Math.random() <= 0.15) {
            random_quirk = quirks.filter(b => b.nome === '0')[0]
            quirkless = true;
        }

        return {random_quirk,quirkless}
    },
    timeSinceLastQuirk: (res, message) => {
        let dataDoUltimoQuirk = new Date(res[0].lastQuirk);
        let hoje = new Date();
        let horas = (hoje - dataDoUltimoQuirk) / 36e5
        let decimal = (Math.abs((process.env.quirk_time - horas)) - Math.floor((process.env.quirk_time - horas)))                                        

        if((process.env.quirk_time - horas) > 0) {
            message.reply(`fica frio aí, ainda faltam ${(parseInt(process.env.quirk_time - horas).toFixed(0))} horas e ${(decimal*60).toFixed(0)} minutos para que você possa tentar novamente.`)            
            return false
        } else {
            return true
        }
    },
    embed: (quirk, member) => {        
        return new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(quirk.nome)
            .setDescription(quirk.descricao)
            .setThumbnail(member.avatarURL())
            .addFields(                
                { name: '\u200B', value: '\u200B' },
                { name: "Tipo:", value: `${quirk.nome === '0' ? 'Padrão' : quirk.tipo}\n`, inline: true },
                { name: "Defesa:", value: `${quirk.defesa}\n`, inline: true },
                { name: "Ataque:", value: `${quirk.ataque}\n`, inline: true },
                { name: "Chance de desviar:", value: `${quirk.dodge_chance*100}%\n`, inline: true },
            )
            .setTimestamp()            
            .setFooter('X Æ A-13', 'https://i.imgur.com/WdgxEnF.png');
    },
}

module.exports = functions