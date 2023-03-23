const {EmbedBuilder, PermissionsBitField, Client} = require("discord.js");
const Discord = require("discord.js")
const ms = require("ms")
const db = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message) => {
const args = message.content.split(" ")

if (!message.member.permissions.has("0x0000000000400000"))
return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle(`Bir Hata Oldu!`)
.setDescription(`• \`${config.prefix}mute\` **kullanmak için,** \`Üyeleri Sustur\` |
**Yetkisine sahip olmasın!**`)
.addFields({ name: `Sunucu Adı:`, value: `${message.guild.name}`, inline: true })
.addFields({ name: `Sunucu ID:`, value: `${message.guild.id}`, inline: true })
.addFields({ name: `Sunucu Sahibi:`, value: `${owner.user.tag}`, inline: true })
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
.setImage(`https://media0.giphy.com/media/5eVwnmr05BLM12np8W/giphy.gif`)
  ]})

var reason = args[1]
if (!reason) return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle('<:carpi:1082620609797824533> Bir Hata Oldu!')
.setDescription(`Süre Belirtmelisin. Örnek: \`${config.prefix}mute <@user> <@muterole> 1m\``)
.setImage('https://media2.giphy.com/media/L3DxbZNlom4uPBK8Hc/giphy.gif')
  ]})

var reason2 = args[2]
if (!reason2) return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle('<:carpi:1082620609797824533> Bir Hata Oldu!')
.setDescription(`Süre'nin Yeri Yanlış! Örnek: \`${config.prefix}mute <@user> <@muterole> 1m\``)
.setImage('https://media2.giphy.com/media/L3DxbZNlom4uPBK8Hc/giphy.gif')
  ]})

let user = message.mentions.users.first();
if(!user) return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle(`Bir Hata Oldu!`)
.setDescription(`<:carpi:1082620609797824533> Kullanıcı Etiketleyerek dener misin?`)
.setImage('https://media2.giphy.com/media/L3DxbZNlom4uPBK8Hc/giphy.gif')
  ]})
    

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle(`Bir Hata Oldu!`)
.setDescription(`<:carpi:1082620609797824533> Mute rolünü etiketleyerek dener misin!?`)
.setImage('https://media2.giphy.com/media/L3DxbZNlom4uPBK8Hc/giphy.gif')
  ]})

let mutezaman = args[3]

let zamancins = mutezaman
.replace("s"," Saniye")
.replace("m"," Dakika")
.replace("h"," Saat")
.replace("d"," Gün");

setTimeout(function(){
    db.delete(`muteli_${message.guild.id + user.id}`)
    message.guild.members.cache.get(user.id)
        message.channel.send(`${user} Muten açıldı.`)
message.guild.members.cache.get(user.id).roles.remove(rol)
      }, ms(mutezaman));

message.guild.members.cache.get(user.id).roles.add(rol)
message.reply(`${user} **Dostum mutelendin ama muten açıldığında haber vericem.**`)
const embed = new EmbedBuilder()
.setColor("Grey")
.setTitle(`Başarıyla Tamamlandı!`)
.setDescription(`<:durum_aktif:1084299917448724590> Başaryıla ${user} Adlı kullanıcıyı ${zamancins} Süre boyunca ${rol} Rolü Verildi.

**NOT:** Eğer Çalışmazsa Doğru Kullanım: ?mute \`<@role>\` \`<@user>\` \`1m\`
> Böyle deneyin böyle çalışıcaktır.`)
.setImage('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDlhNjQwY2UyZTVlOTU3MTYyMjg2OWZjNmI4YmU2ODJjODI1ZWQ2NSZjdD1n/Ri8u7mhskrYMPwzLe8/giphy.gif')
return message.channel.send({embeds : [embed]})

};
exports.conf = {
aliases: []
};
  
exports.help = {
name: "mute"
};
