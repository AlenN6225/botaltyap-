const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Pingim **" + client.ping + "** ms!");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p'],
  permLevel: 0 
};

exports.help = {
  name: 'botping', 
  description: 'Botun pingini gösterir',
  usage: 'botping'
};