module.exports.run = async (bot, message, args,) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        let game = args.slice(0).join(' ');
        if (!game)
            return message.reply("Field cannot be blank, please enter a game")
        
        bot.user.setGame(game);
        message.reply(`Game has been set to: ${game}`)
    } else {
        message.reply("Sorry! Command is restricted to Admins only.")
    }
}

module.exports.help = {
    name: "setgame"
}