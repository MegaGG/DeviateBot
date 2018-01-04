const botData = require('../../JSONfiles/botData.json')

module.exports.run = async (bot, message, args) => {
    if (message.author.id == botData.megaID) {
        
        let roleName = args.slice(0).join(' ');
        let roleID = message.guild.roles.find("name", roleName).id

        message.reply(`The ID for role ${roleName} is ${roleID}`);

    } else if (message.author.id != botData.megaID) {

        console.log(`Unauthorised use of 'findid' command detected. Culprit: ${message.author.tag}`);
        message.reply("Sorry! Command can only be used by MegaGG#5621");

    }
}

module.exports.help = {
    name: "findroleid"
}
