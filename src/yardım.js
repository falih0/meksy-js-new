const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events, StringSelectMenuBuilder, InteractionCreate } = require('discord.js');
var config = require("../config.js");

let buttonlar = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
  .setLabel('Bot Website')
  .setStyle(ButtonStyle.Link)
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=1082617915267883060&permissions=8&scope=bot%20applications.commands`)
  .setEmoji('1082620802136023100'),
  new ButtonBuilder()
  .setLabel('Destek Sunucusu')
  .setStyle(ButtonStyle.Link)
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=1082617915267883060&permissions=8&scope=bot%20applications.commands`)
  .setEmoji('1082620741842903080'),
  new ButtonBuilder()
  .setLabel('Davet Et')
  .setStyle(ButtonStyle.Link)
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=1082617915267883060&permissions=8&scope=bot%20applications.commands`)
  .setEmoji('1082620635911573504')
  )

  const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('select')
      .setPlaceholder('Bir Kategori Seçmelisin!')
      .addOptions(
        {
          label: 'Popüler Komutlarım',
          description: 'Çok Kullanılan Komutlarım.',
          value: 'deneme1',
          emoji: '1082620640747593768'
        },
        {
          label: 'Moderasyon',
          description: 'Tüm moderasyon komutlarım burdadır.',
          value: 'deneme2',
          emoji: '1082620628869320798'
        },
        {
          label: 'Yetkili',
          description: 'Tüm yetkili komutlarım burdadır.',
          value: 'deneme3',
          emoji: '1082620635911573504'
        },
        {
          label: 'Sistemler',
          description: 'Tüm sistemler komutlarım burdadır.',
          value: 'deneme4',
          emoji: '1082620601832837141'
        },
        {
          label: 'Eğlence',
          description: 'Tüm eğlence komutlarım burdadır.',
          value: 'deneme5',
          emoji: '1082620541900435496'
        },
      ),
  );


exports.run = async (client, message, args) => { 
  const moment = require("moment");
  require("moment-duration-format");

  const Uptime = moment
  .duration(client.uptime)
  .format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new EmbedBuilder()
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
    .setColor("Grey") 
    .setAuthor({name: `Meksy.js | Yardım Menüsü`, iconURL: client.user.avatarURL(),})
    .setDescription(`Selam! ben **Meksy.js**,
Sizler için yapılan bir botum.
<:icon_comment:1082620751624024184> **Prefixim:** \`${config.prefix}\`
<:beyaz:1082620569620594708> **Başlama Sürem:** \`${Uptime}\`

<:credit:1082620628869320798> \`${config.prefix}moderasyon\`
> Tüm **moderasyon** komutlarım burdadır.

<:earth:1082620635911573504> \`${config.prefix}yetkili\`
> Tüm **yetkili** komutlarım burdadır.

<:cam:1082620601832837141> \`${config.prefix}sistemler\`
> Tüm **sistemler** komutlarım burdadır.

<:bughunter:1082620541900435496>  \`${config.prefix}eğlence\`
> Tüm **eğlence** komutlarım burdadır.

<:ark:1082620562242805810> \`${config.prefix}emoji\`
> Tüm **Emoji** komutlarım burdadır.
    `)
    .addFields({ name: `- Daha fazla bilgi için;`, value: `<@1077030644586131527> Ulaşabilirsin.`, inline: true })
    .addFields({ name: `- Komutun Kullanılma Süresi:`, value: `**<t:${Math.floor(Date.now() /1000)}:R>**`, inline: true })
    .setFooter({  text: `${message.author.username} tarafından istendi.`, iconURL: message.author.avatarURL({}) })
    .setTimestamp()
    await message.channel.send({ embeds: [embed], components: [row]  }).then(async () => { await message.channel.send({components: [buttonlar]}) })

    client.on(Events.InteractionCreate, async interaction => {
      if (!interaction.isStringSelectMenu()) return;
  
      const selected = interaction.values[0];
  
          if (selected === 'deneme1') {
          await interaction.deferUpdate();
          const embed2 = new EmbedBuilder()
          .setColor("Grey") 
          .setAuthor({name: `Meksy.js | Popüler Komutlar`, iconURL: client.user.avatarURL(),})
          .setDescription(`<:ark:1082620562242805810> **[Emoji Komutu](https://meksybot.glitch.me/commands.html)** [**?emoji**]
          > Emoji Komutuyla **EmojiID, EmojiURL** Vs. Vs. __Alabilirsin__!`)
          await interaction.editReply({ embeds: [embed2], components: [], components: [] }).catch((err) => err.stack)
      } else if (selected === 'deneme2') {
          await interaction.deferUpdate();
          const embed3 = new EmbedBuilder()
          //.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
          .setColor("Grey") 
          .setAuthor({name: `Meksy.js | x`, iconURL: client.user.avatarURL(),})
          .setDescription(`> Yakında!`)
          await interaction.editReply({ embeds: [embed3], components: [] }).catch((err) => err.stack)
      } else if (selected === 'deneme5') {
          await interaction.deferUpdate();
          const embed4 = new EmbedBuilder()
          //.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
          .setColor("Grey") 
          .setAuthor({name: `Meksy.js | x`, iconURL: client.user.avatarURL(),})
          .setDescription(`> Yakında!`)
          await interaction.editReply({ embeds: [embed4], components: [] }).catch((err) => err.stack)
      } else if (selected === 'deneme5') {
          await interaction.deferUpdate();
          const embed4 = new EmbedBuilder()
          //.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/ba3dcd96-f0d3-4f90-a902-f864d003e214/Meksy%20Logo.png?v=1677298284733')
          .setColor("Grey") 
          .setAuthor({name: `Meksy.js | xx `, iconURL: client.user.avatarURL(),})
          .setDescription(`> Yakında!`)
          await interaction.editReply({ embeds: [embed4], components: [] }).catch((err) => err.stack)
      }
  })

};
 exports.conf = {
    aliases: [] 
  };

  exports.help = {
    name: "yardım" 
  };