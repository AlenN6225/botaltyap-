const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**ASPA MUSIC BOTUNUN KOMUTLARI**", "**!!çal** Şarkı çalar. **!!durdur** Şarkıyı durdurur. **!!geç** Şarkıyı geçer. **!!devam** Şarkıya devam eder.") 
  .addField("**Yetkili Komutlari**", `**m!oylamayap__m!hazır-rol__** **__m!hazır-sunucu__** **m!gç-ayarla** **m!otorol-ayarla m!duyur m!küfür-engel aç** **m!prefixayarla m!kufurengel aç m!ban. \m!kick  = \m!unban = \m!mute \m!vote** `)
  .addField("**Ana Komutlar**", "m!linkengel m!şikayet m!öneri m!kayıtol m!sustur m!kilitle m!müzikdavet  m!kayıtol\ m!yardım \ m!kullanicibilgi\ m!botbilgi\m!botping\ m!davet\ m!sahip")
  .addField("**Eğlence Komutları**", " m!balıktut m!korkut m!atam m!havadurum m!çevir m!fdans m!hıztesti m!kaçcm m!aşkölçer m!saat m!nsfwgif m!ib m!aspacinsiyetinne !çekiç m!gifara\ m!ara155\ m!emojiyazı\ m!tersmesaj\ m!spotify\ m!slotoyunu\ m!çekiç\ m!hesapla \ m!wasted \ m!sitrescarkı \m!sifre \m!hesapla  \m!servericon \m!çayver  \m!avatar  \m!8ball m!öpücük  \ m!çayver \m!yak \m!sarıl \m!espriyap" )
  .addField("**Bot Yapımcısı**", " **Shut  the fuck up#7806** ")
  .addField("**Destek sunucusu:**"," https://discord.gg/5MY8DAu",)
  .addField("**Müzik botumuz:**", " **https://discordapp.com/oauth2/authorize?client_id=601010352116727838&scope=bot&permissions=1341644225**")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys())
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};