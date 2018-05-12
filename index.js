const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login(process.env.TOKEN)

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

if(command === "+ban") {
  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
    return message.reply("Tu n'as pas la permission!");
  
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Veuillez mentionner un membre valide de ce serveur");
  if(!member.bannable) 
    return message.reply("Je ne peux pas interdire cet utilisateur! Ont-ils un rôle plus important? Ai-je des autorisations d'interdiction?");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Aucune raison";
  
  await member.ban(reason)
    .catch(error => message.reply(`Pardon ${message.author} Je ne pouvais pas interdire à cause de : ${error}`));
  message.reply(`${member.user.tag} a été banni par ${message.author.tag} parceque: ${reason}`);
}
