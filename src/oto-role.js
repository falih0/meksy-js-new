const { EmbedBuilder } = require("discord.js");
const db = require('croxydb')
const config = require("../config.js");

exports.run = async (client, message, args) => {

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

let rol = message.mentions.roles.first();
if(!rol) return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle(`<:carpi:1082620609797824533> Bir Hata Oldu!`)
.setDescription(`Rol Etiketleyerek dener misin?`)
    ]})

const embed = new EmbedBuilder()
.setColor("Grey")
.setTitle(`<:durum_aktif:1084299917448724590> İşte bu kadar!`)
.setDescription(`Otorol da kullanılacak: ${rol} rolü olarak değiştirildi.`)
await message.channel.send({embeds : [embed]})
db.set(`otorol_${message.guild.id}`, {rol: rol.id})
};
exports.conf = {
aliases: ["otorol"]
};
  
exports.help = {
name: "oto-rol"};