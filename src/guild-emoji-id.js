const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => {

  var emojis = message.guild.emojis.cache.find(s => s.name === args[0]);
  if(!emojis) return message.channel.send(`<:carpi:1082620609797824533> **HATA ALDIM!**\n> Sunucudan Bir Emoji İsmi Yazmalısın.`)
    ///let emoji = message.guild.emojis.cache.find(s => s.name === args[0]);

    message.reply(`\`\`\`${emojis}\`\`\``)

};
exports.conf = {
  aliases: ["guild-emoji-id"]
};

exports.help = {
  name: "guild-emojiid"};