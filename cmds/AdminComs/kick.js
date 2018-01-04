module.exports.run = async (bot, message, args) => {
    if(message.member.author.id === '212073112378933249' || '214662509175504896') {
        let member = message.mentions.members.first();

        if(!member) return message.reply("Please mention a valid member of this server");
        if(!member.kickable) return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

        let reason = args.slice(1).join(' ');

        if(!reason) return message.reply("Please indicate a reason for the kick!");

        await member.kick(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag}. Reason: ${reason}`);
    } else {
        message.reply("Sorry! Command is restricted to Admins only.")
    }
}

module.exports.help = {
    name: "kick"
}
