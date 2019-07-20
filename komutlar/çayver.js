const Discord = require('discord.js');
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./altin.sqlite");

exports.run = (client, message) => {
   sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points - 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points - 10}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.channel.send({embed: {
          author: {
            name: (message.author.username),
            icon_url: message.author.avatarURL
          },
          "image": {
          url:"https://www.assosb2b.com/resim/urun/BLZ7909-00-6716.JPG"},
          color: 0xD97634,
          title: "Bilezik aldın",
          description: `Bilezik aldın karına takarsın artık !`
        }})
    };
      sql.run(`UPDATE scores SET points = ${row.points - 5} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });
    message.channel.send({embed: {
          author: {
            name: (message.author.username),
            icon_url: message.author.avatarURL
          },
           "image": {
          url:"https://i.postimg.cc/43Hs2Bx5/bardak-c-ay-png.png"},
          color: 0xD97634,
          title: "Biri çay istedi",
          description: `Vereyim abime!`
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'çayver',
  description: 'kedileri gösterir.',
  usage: 'çayver'
};