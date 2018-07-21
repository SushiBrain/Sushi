const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ("+")

bot.on('ready', function () {
  bot.user.SetActivity("+help")
  console.log("Je suis connecté !")
})

bot.on('message', msg => {
  if (msgmsg.content === prefix + 'ping') {
    msg.reply('pong !')
  }
})
bot.login('process.env.TOKEN')
