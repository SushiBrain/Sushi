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

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
  
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  
  if(command === "+ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "+kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Tu n'as pas la permission!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Veuillez mentionner un membre valide de ce serveur");
    if(!member.kickable) 
      return message.reply("Je ne peux pas kick cet utilisateur! Ont-ils un rôle plus important? Ai-je des autorisations de kick?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison fournie";
    
    await member.kick(reason)
      .catch(error => message.reply(`Pardon ${message.author} je ne pouvais pas kick à cause de: ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "+ban") {
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Tu n'as pas la permission!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Veuillez mentionner un membre valide de ce serveur");
    if(!member.bannable) 
      return message.reply("Je ne peux pas interdire cet utilisateur! Ont-ils un rôle plus important? Ai-je des autorisations d'interdiction?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison fournie";
    
    await member.ban(reason)
      .catch(error => message.reply(`Pardon ${message.author} je ne peux pas ban a cause de : ${error}`));
    message.reply(`${member.user.tag} a été ban par : ${message.author.tag} parce que: ${reason}`);
  }
});
