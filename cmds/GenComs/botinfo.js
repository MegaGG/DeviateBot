const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    message.channel.send(`DeviateBot is the main management bot for the Deviate Esports Discord. Developed by MegaGG#5621`);
}

module.exports.help = {
    name: "botinfo"
}
