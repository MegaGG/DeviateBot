module.exports.run = async (bot, message, args) => {
    if (message.member.author.id === '212073112378933249' || '214662509175504896') {
        message.delete();
        message.channel.send("<@&380939853635911680> Reminder that there are scrims tonight! check <#380942440116256768> for more details.");
    }
        
}

module.exports.help = {
    name: "scrimremind"
}
