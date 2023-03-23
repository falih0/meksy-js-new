const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.src = new Collection();
client.aliases = new Collection();
fs.readdir("./src/", (err, files) => {
if (err) console.error(err);
files.forEach(f => {
let props = require(`../src/${f}`);

console.log(`${props.help.name} Named Command Online!`);
    
client.src.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});