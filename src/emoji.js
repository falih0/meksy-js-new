const { EmbedBuilder } = require("discord.js"); 

exports.run = async (client, message, args) => { 
    const embed = new EmbedBuilder() 
    .setColor("Grey")
    .setAuthor({name: `Meksy.js | Emoji`, iconURL: client.user.avatarURL(),})
    .setDescription(`** • ?guild-emoji** \`=>\` Sunucudaki Bir Emojinin İsmini Yazarak PNG'sini Alabilirsin!

> **Örnek:** __<:icon_discord:1082620827712884756>__

** • ?guild-emojiid** \`=>\` Sunucudaki Bir Emojinin İsmini Yazarak ID'sini alabilirsin!

> **Örnek:** __\`<:icon_discord:1082620827712884756>\`__
`) 
.setFooter({  text: `Sorgulayan: ${message.author.username}#9999`, iconURL: message.author.avatarURL({}) })
return message.channel.send({embeds : [embed]});

};
exports.conf = {
aliases: []
};

exports.help = {
name: "emoji" 
};