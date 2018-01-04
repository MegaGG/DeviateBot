const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
    const pubEmbed = new Discord.RichEmbed()
        // Header Section
        .setTitle('Ground Zero PUBG Scrims Information')
        .setURL('https://www.twitter.com/GZer0gaming')          
        .setAuthor('Team Deviate Management Bot', 'https://i.imgur.com/awzLiY0.png')
        .setColor('#00001a')

        // Fields Section
        .addField('GZ Contact Details', '● **Email:** gzgaming.contact@gmail.com\n● **Facebook:** GZer0gaming\n● **Twitter:** GZer0gaming\n● **Discord:** discord.gg/9puY7Zk', false)
        .addField('MATCH START TIME', 'The match will be commenced on the announce start time. Once a match has commenced,\
 no players will beallowed to enter the server. Players are allowed to reconnect if they drop out or crash.\
 Any exceptions to thisrequirement will be issued at the sole discretion of a GZ administrator.', false)
        .addField("Rules and Team Rosters", "[GZ PUBG Rules](https://goo.gl/1ozTn3)\n[PUBG Team Roster](https://goo.gl/a5kJGB)", false)

        // Images Section
        .setThumbnail('https://pbs.twimg.com/profile_images/833219216924749825/ilHxE_oG_400x400.jpg')

        //Footer Section
        .setTimestamp()
        .setFooter("© Deviate Esports Org. 2017", 'https://i.imgur.com/awzLiY0.png')

    if (message.member.hasPermission("ADMINISTRATOR") && args[0] === 'channel') {
        message.channel.send(pubEmbed).catch(console.error)
    } else {
        message.reply("Check your DMs :wink:")
        message.author.send(pubEmbed)
    }
}

module.exports.help = {
    name: "pubscrims"
}