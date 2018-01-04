const Discord = require('discord.js');
const fs = require('fs');

const botSettings = require('./JSONfiles/config.json');
const botData = require('./JSONfiles/botData.json')

const bot = new Discord.Client();
const prefix = botSettings.prefix

bot.commands = new Discord.Collection();

fs.readdir('./cmds/GenComs/', (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split('.').pop() === 'js'); 
    if (jsfiles.length <= 0) {
        console.log("No commands to load");
        return
    }

    console.log(`\nLoading ${jsfiles.length} General Commands`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/GenComs/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

fs.readdir('./cmds/AdminComs/', (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split('.').pop() === 'js'); 
    if (jsfiles.length <= 0) {
        console.log("No commands to load");
        return
    }

    console.log(`\nLoading ${jsfiles.length} Admin Commands`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/AdminComs/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

fs.readdir('./cmds/DevComs/', (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split('.').pop() === 'js'); 
    if (jsfiles.length <= 0) {
        console.log("No commands to load");
        return
    }

    console.log(`\nLoading ${jsfiles.length} Dev Commands`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/DevComs/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});


bot.login("Mzg2Mjc4OTgzNzMxMjQ5MTUz.DS85ug.kiRQTW_VLFDrnjlXl6mdFrs5aOI").catch(console.error)

bot.on("ready", async () => {
    console.log(`\n${bot.user.tag} has succesfully logged in...`);
    const invLink = await bot.generateInvite(8);
    console.log(invLink);
});

bot.on("message", async message => {
            
    if (message.author === bot.user) return;
    if (message.channel.type === 'dm') return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    console.log(`${message.author.tag} has used the ${message.content} command.`);

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);

});