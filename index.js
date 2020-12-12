require('dotenv').config()
const { GuildChannel, GuildChannelManager } = require('discord.js');
const Commando = require('discord.js-commando');
const bot = new Commando.CommandoClient();
const TOKEN = process.env.BOT_TOKEN;
const fs = require('fs');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1};
var prefix = '/';

/* On enregistre les différents dossiers */
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('rpg', 'RPG');
bot.registry.registerGroup('memes', 'Memes');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

var setRandomBotActivities = setInterval(function() {
    
    var activities = [
        "Eating screws",
        "Reticulating splines",
        "Tidy up his plugins",
        "Playing Minecraft",
        "Fighting Daleks",
        "Updating his software",
        "Coding plugins"
    ];

    bot.user.setActivity(activities[Math.floor(Math.random() * activities.length)]);
}, 300000); // The bot will change its activiies every 5 minutes

bot.on('ready', function() {
    console.log("Task Manager, ready to go !");
});

bot.on('message', message => {
    if (message.content === prefix + 'help') {
        console.log("[SYSTEM] " + message.author.username + " asked the bot for help!");
    }
    if (message.content === "running 90s") {
        // Not working at this point 
        message.reply("!join https://youtu.be/XCiDuy4mrWU?t=85");
    }

    if (message.content.toLowerCase().startsWith("!play")) {
        var channelToJoin = message.member.voice.channel;
        var result_list_search = message.content.toLowerCase().search("--list")
        console.log(result_list_search);

        if (channelToJoin != null) {
            
            channelToJoin.join()
            .then(connection => {
                console.log("Task Manager joined the channel " + channelToJoin.name);
                const stream = ytdl('https://www.youtube.com/watch?v=9YHTVML4PTE', { filter : 'audioonly' });
                const dispatcher = connection.play(stream, streamOptions);
            })
            .catch();
            message.reply("Task Manager has joined the voice channel and is ready to go!")
        }
        else {
            message.reply("You must be in a voice channel to play music.")
        }
    } 
    
    if (message.content.toLowerCase().startsWith("!leave")) {
        var channelToLeave = message.member.voice.channel;
 
        if (channelToLeave != null) {
            channelToLeave.leave();
        } else {
            message.reply("The bot is currently not in a voice channel.")
        }
    }
});

bot.login(TOKEN);