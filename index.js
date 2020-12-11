const Commando = require('discord.js-commando');
const bot = new Commando.CommandoClient();
const TOKEN = 'NjQ3MDM0MTQwODY0MjgyNjU0.XdZzgA.PYjalvcbx9Ph8VQ6toTtgDgWeB8';
var prefix = '/';

/* On enregistre les différents dossiers */
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('rpg', 'RPG');
bot.registry.registerGroup('memes', 'Memes');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready', function() {
    console.log("Task Manager, ready to go !");
});

bot.on('message', message => {
    if (message.content === prefix + 'help') {
        console.log("[SYSTEM] " + message.author.username + " asked the bot for help!");
    }
    if (message.content === "running 90s") {
        message.reply("!join https://youtu.be/XCiDuy4mrWU?t=85");
    }
});

bot.login(TOKEN);