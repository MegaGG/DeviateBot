module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        let text = args.slice(0).join(" ")
        message.delete().catch(O_o=>{});
        message.channel.send(text)
    } else if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.reply("Sorry! That command is restricted to Administrators only." );
    }
}

module.exports.help = {
    name: "say"
}