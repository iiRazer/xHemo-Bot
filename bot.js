const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522478630669123626")
setInterval(function() {
channel.send(`**__xHemo__**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
