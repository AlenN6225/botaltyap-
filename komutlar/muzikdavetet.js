exports.run = function(client, message, args) {
        message.channel.send("**Müzik botumuzu davet et!** https://discordapp.com/oauth2/authorize?client_id=601010352116727838&scope=bot&permissions=1341644225");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tst"],
  permLevel: 4
};

module.exports.help = {
  name: 'müzikdavet',
  description: '',
  usage: 'müzikdavet'
};
//aspa
