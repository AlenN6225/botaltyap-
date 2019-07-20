
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "use m!",
        "m!yardım 🔥",
        "m!müizkdavet Müzik botumuz ♪♪",
        "Otomatik kurulum için m!hazır-sunucu",
        "Otomatik Rol kurulumu için m!hazır-rol",
        "Botumuz hergün gelişmektedir!⭐️",
        "m!davetkur - Sunucu daveti oluşturur!⚡️",
        "m!uyar -   Oyuncu Uyarır🍂 ",
        "m!sunucubilgi - SunucuBilgi Eklendi🌹 "
    ];
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
 
      client.user.setGame(oyun[random], "https://www.twitch.tv/aspabot");
        client.user.setStatus("dnd");
        }, 2 * 2500);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};