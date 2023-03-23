const Discord = require("discord.js");
const db = require("croxydb")


module.exports.run = async (client, message, args) => {

if (!message.member.permissions.has("0x0000000000000008"))
return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle(`Bir Hata Oldu!`)
.setDescription(`• \`${config.prefix}oto-rol\` **kullanmak için,** \`Yönetici\` |
**Yetkisine sahip olmasın!**`)
.addFields({ name: `Sunucu Adı:`, value: `${message.guild.name}`, inline: true })
.addFields({ name: `Sunucu ID:`, value: `${message.guild.id}`, inline: true })
.addFields({ name: `Sunucu Sahibi:`, value: `${owner.user.tag}`, inline: true })
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
.setImage(`https://media0.giphy.com/media/5eVwnmr05BLM12np8W/giphy.gif`)
    ]})

const embed = new Discord.EmbedBuilder()
.setColor("Grey")
.setTitle('<:carpi:1082620609797824533> İşte bu kadar!')
.setDescription(`Başarıyla küfür engel sistemi kapatıldı.`)
const embed2 = new Discord.EmbedBuilder()
.setColor("Grey")
.setTitle('<:durum_aktif:1084299917448724590> İşte bu kadar!')
.setDescription(`Başarıyla küfür engel aktif!`)
let küfür = db.fetch(`kufurengel_${message.guild.id}`);
if (küfür)  {
db.delete(`kufurengel_${message.guild.id}`);
message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
return
}
if (!küfür)  {
db.set(`kufurengel_${message.guild.id}`, true);
message.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
return
}
};
exports.conf = {
aliases: ["küfürengel"]
};
exports.help = {
name: "küfür-engel"
};