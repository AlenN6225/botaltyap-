exports.run = function(client, message, args) {
        message.channel.send("**__m!temizle m!dcsunucu__** **Herhangi bir komut kullanmak için m!**");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tst"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: '',
  usage: 'komutlar'
};
//aspa
