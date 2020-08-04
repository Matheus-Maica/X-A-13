require('dotenv').config();
const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require('fs');
const Bot = require('./util.js')
var bot = new Bot();
let commands = [];
client.on('ready', async () => {  
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: `${process.env.prefix}help` }, status: 'online' });
  await fs.readdir("./commands/", (err, files) => {
    commands = files.map(el => el.split('.')[0])    
  })  
});

client.on('message', async message => {  
  if(!message.content.startsWith(process.env.prefix)) return;
  if(message.author.bot) return;
  const command = message.content.split(process.env.prefix)[1].split(" ")[0].toLowerCase()
  if(commands.indexOf(command) === -1) {
    message.reply("não entendi, verifique o comando.");
    return;
  }
  
  bot.read(message, command).then(res => console.log(`${res} está executando o comando ${command}`))
    .catch(err => {
      if(err === "NO PERM") {
        message.reply("sem permissão pra isso camarada.")      
      }
      console.log(err);
      return;
    })
})

client.login(process.env.token);