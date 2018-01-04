const botData = require('../../JSONfiles/botData')

module.exports.run = async (bot, message, args) => {
    if (message.author.id === botData.megaID) {
        
        const m = await message.channel.send("Calculating ping...");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    } else {
        message.reply("Sorry! Command is restricted to MegaGG#5621")
    }
}

module.exports.help = {
    name: "ping"
}