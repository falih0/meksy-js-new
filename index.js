const { Client, Events, Partials, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { token } = require('./config');
const config = require("./config.js");
const canvacord = require("canvacord");
const db = require('croxydb');

const client = new Client({
	partials: [
	  Partials.Message, // for message
	  Partials.Channel, // for text channel
	  Partials.GuildMember, // for guild member
	  Partials.Reaction, // for message reaction
	  Partials.GuildScheduledEvent, // for guild events
	  Partials.User, // for discord user
	  Partials.ThreadMember, // for thread member
	],
	intents: [
	  GatewayIntentBits.Guilds, // for guild related things
	  GatewayIntentBits.GuildMembers, // for guild members related things
	  GatewayIntentBits.GuildBans, // for manage guild bans
	  GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
	  GatewayIntentBits.GuildIntegrations, // for discord Integrations
	  GatewayIntentBits.GuildWebhooks, // for discord webhooks
	  GatewayIntentBits.GuildInvites, // for guild invite managing
	  GatewayIntentBits.GuildVoiceStates, // for voice related things
	  GatewayIntentBits.GuildPresences, // for user presence things
	  GatewayIntentBits.GuildMessages, // for guild messages things
	  GatewayIntentBits.GuildMessageReactions, // for message reactions things
	  GatewayIntentBits.GuildMessageTyping, // for message typing things
	  GatewayIntentBits.DirectMessages, // for dm messages
	  GatewayIntentBits.DirectMessageReactions, // for dm message reaction
	  GatewayIntentBits.DirectMessageTyping, // for dm message typinh
	  GatewayIntentBits.MessageContent, // enable if you need message content things
	],
  });

client.once(Events.ClientReady, c => {
	console.log(`Başarıyla ${c.user.tag} Bot Giriş Yaptı!`);
});

client
   .login(config.token || process.env.TOKEN).catch(e => {
console.log("[HATA] Botun İtentleri Kapalı!")})

client
   .login(token).catch(err => {console.error("[HATA] Tokene bağlanılamıyor tokeni yenileyin!")});

client
  .login(config.token || process.env.TOKEN)
  .then(() => console.log("Bot Başarıyla Bağlandı!"))
  .catch(() => console.log("[HATA] Bot Bağlanamadı!"))

client.on("ready", () => {
	client.user.setActivity(`🛸 ?yardım - ?güncelleme`)
	client.user.setStatus('idle');
});
process.on('unhandledRejection', err => {console.log(err)})
process.on('uncaughtException', err => {console.log(err)})
process.on('rejectionHandled', err => {console.log(err)})


client.login(token);

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

  client.on('guildMemberAdd', async member => {
  
	let otorol = db.fetch(`otorol_${member.guild.id}`)
	if(!otorol) return;
	member.roles.add(otorol.rol).catch(() => {}).catch((err) => err.stack)
  });
  
client.on("messageCreate", (message) => {
let kufur = db.fetch(`kufurengel_${message.guild.id}`)
if(!kufur) return;
if(kufur) {
const kufurler = [
"amk",
"piç",
"yarrak",
"oç",
"göt",
"amq",
"yavşak",
"amcık",
"amcı",
"orospu",
"sikim",
"sikeyim",
"aq",
"mk"
]
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send({ embeds: [
new EmbedBuilder()
.setColor("Grey")
.setTitle('Hey Dostum!')
.setDescription('Bu sunucuda küfür engel sistemi açık!')
]})
}
}
})
