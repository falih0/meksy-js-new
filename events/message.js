const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const client = require("..");
const prefix = config.prefix;

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let src = message.content.toLocaleLowerCase().split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.src.has(src)) {
    cmd = client.src.get(src);
  } else if (client.aliases.has(src)) {
    cmd = client.src.get(client.aliases.get(src));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
});