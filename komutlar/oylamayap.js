const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x:yazi yazman gerek :x:`)).then(m => m.delete(5000));

     console.log("o!oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafindan kullanildi.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('BayAsist', client.user.avatarURL)

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('?');

         message.react('?');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanizi saglar.',
  usage: 'o!oylama <oylamaismi>'
};