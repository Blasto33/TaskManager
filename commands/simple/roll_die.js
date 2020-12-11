const commando = require('discord.js-commando');

class DieRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Lance un dé à six faces'
        });
    }
    
    async run (message, args) {
        var dieRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("votre dé a atterri sur " + dieRoll);
    }
}

module.exports = DieRollCommand;