module.exports.run = async (bot, message, args) => {
    if (message.author.id === '212073112378933249' || '214662509175504896') {
        let member = message.mentions.members.first();
        if (!member) return message.reply("Please enter a valid member of the server.");

        let reason = args.slice(1).join(' ');
        if (!reason) return message.channel.send(`${member} you have been warned. Reason: None given.`);

        message.channel.send(`${member} you have been warned. Reason: ${reason} `)
    } else if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.reply("Sorry! Command is restricted to Admins only.")
    }
}

module.exports.help = {
    name: "warn"
}
