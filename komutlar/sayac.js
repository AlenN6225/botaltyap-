   
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  
let yazi = args.slice(0).join(' ');

  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        
  
  

  if(!yazi) {
   message.channel.send(`Adam Çıkınca  ne yazcak onu Belirt!`)
  }
  
  
  
 

db.set(`girişÇ_${message.guild.id}`, yazi)

  
  message.channel.send(`Mesaj ${yazi} olarak ayarlandı`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'çıkışmesaj',
        description: 'Sayacı ayarlar.',
        usage: 'm!sayaç <sayı> <#kanal> / sıfırla'
}