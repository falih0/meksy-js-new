const { EmbedBuilder } = require("discord.js");
const db = require('croxydb')
const config = require("../config.js");

exports.run = async (client, message, args) => {

if (!message.member.permissions.has("0x0000000000000008"))
return message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("#2b2d31")
.setTitle(`<:carpi:1082620609797824533>  Bir hata oldu!`)
.setDescription(`• \`${config.prefix}tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
  ]}).then(async (a) => { 
    setTimeout(async () => {
    a.delete()
    }, 10000)
    })

if(!args[0])
return message.channel.send({ embeds: [
    new EmbedBuilder()
    .setColor("#2b2d31")
    .setTitle(`<:carpi:1082620609797824533> Bir hata oldu!`)
    .setDescription(`Bir Simge koyarak dener misin?`)
      ]})
const embed = new EmbedBuilder()
.setColor("#2b2d31")
.setTitle(`<:durum_aktif:1084299917448724590> İşte bu kadar!`)
.setDescription(` \`${args[0]}\` `)
await message.channel.send({embeds : [embed]})
db.set(`tag_${message.guild.id}`, args[0]+' ');
};
exports.conf = {
aliases: ["tag"]
};
  
exports.help = {
name: "sembol"};