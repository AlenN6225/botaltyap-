const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, msg, args) => {
  if (!args[0]) return msg.channel.send(`Aç yada kapat yazmalısın!! Örnek:m!sa-as aç`)
  if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send('Bu komutu kullanmak için`MESAJLARI_YÖNET` yetkisine sahip olmalısın!')

  if (args[0] == 'aç') {
    db.set(`ssaass_${msg.guild.id}`, 'acik').then(i => {
      msg.channel.send(`Artık biri sa diyince otomatik olarak Aleyküm Selam diyecek.`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`ssaass_${msg.guild.id}`, 'kapali').then(i => {
      msg.channel.send(`Artık biri sa diyince cevap vermicek...`)
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'saasayarla.',
  usage: 'sa-as'
};