const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('NDQ0NTk1ODQ1MDQ4OTU4OTc2.DdeXew.-uCxyHNrUtsgV1lf-oz3Qqpf5vw')

bot.on('message', message => {
  if (message.content === '+ping') {
    message.reply('pong !')
  }
})

bot.on('message', message => {
  if (message.content === '+avatar') {
    message.reply(message.author.avatarURL);
  }
})

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
  }).catch(console.error)
})