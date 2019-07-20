const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "Üye"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
let destekKanal = "539302602001743872";/// buraya canlı destek mesajı atılacak kanal idisi
  if (message.member.roles.has(role.id)) return message.channel.send(":no_entry: Zaten Kayıt olmuşsunuz")
  message.member.addRole(role); 
  message.channel.send(`:white_check_mark: Başarıyla Kayıt Oldunuz `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtol',
  description: 'Kayıtol',
  usage: 'js'
};