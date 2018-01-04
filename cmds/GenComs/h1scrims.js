const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
    const h1Embed = new Discord.RichEmbed()
        // Header Section
        .setTitle('H1Z1 Scrims Information')
        .setURL('https://www.twitter.com/aush1scrims')          
        .setDescription('Team Deviate Current Division: Div 3\nOfficial Scrim times are on Tuesdays and Thursdays at the below times.')
        .setAuthor('Team Deviate Management Bot', 'https://i.imgur.com/awzLiY0.png')
        .setColor('#00001a')

        // Fields Section
        .addField("AU Times", "**Game 1:** 6:45pm\n**Game 2:** 7:45pm\n**Game 3:** 8:30pm", true)

        .addField("NZ Times", "**Game 1:** 8:45pm\n**Game 2:** 9:45pm\n**Game 3:** 10:30pm", true)

        .addField("Team Practice Would Be Ideally:", "Monday and Friday: 6pm AEST | 8pm NZT", true)

        .addField("Leaderboards", "[Div 3 Leaderboards](https://goo.gl/vgKCgk)", true)

        // Images Section
        .setThumbnail('https://pbs.twimg.com/profile_images/866631572107165696/ToEtof1B_400x400.jpg')

        //Footer Section
        .setTimestamp()
        .setFooter("© Deviate Esports Org. 2017", 'https://i.imgur.com/awzLiY0.png')


    if (message.member.hasPermission("ADMINISTRATOR") && args[0] === "channel") {
        message.channel.send(h1Embed).catch(console.error);
    } else {
        message.reply("Check your DMs :wink:")
        message.author.send(h1Embed)
    }
}

module.exports.help = {
    name: "h1scrims"
}