module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        message.channel.send("<@&380939853635911680> Reminder that there are scrims tonight! check <#380942440116256768> for more details.");
    }
        
}

module.exports.help = {
    name: "scrimremind"
}