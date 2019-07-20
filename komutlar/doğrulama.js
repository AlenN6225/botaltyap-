const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "Rol İSim"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(":no_entry: Zaten bu role sahipsin :/")
  message.member.addRole(role);
  message.channel.send(`:white_check_mark: Rolün başarıyla verildi :)`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtol',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};