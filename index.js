const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login(process.env.TOKEN)

bot.on('message', message => {
  if (message.content === '+avatar') {
    message.reply(message.author.avatarURL);
  }
})

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name","accueil").send(`Bienvenue, ${member}`)
})

bot.on("guildMemberRemove", member => {
  member.guild.channels.find("name","accueil").send(`${member}, a décidé de fuir !`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membre')
    member.addRole(role)
})

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
  }).catch(console.error)
})

bot.on('message', msg => {
  if (msg.content === '+ping') {
    msg.reply('Pong!');
  }
});


