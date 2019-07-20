const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("#15f153")
    .addField("m!eval", "Kod dener")
    .addField("m!load", "Yeni bir komut yükler")
    .addField("m!reboot", "Botu yeniden başlatır")
    .addField("m!reload", "Bir komutu yeniden başlatır")
    .addField("m!unload", "Bir komutu devre dışı bırakır")
    .addField("**Sahibim**"," *Shut the fuck up#7806*")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};
