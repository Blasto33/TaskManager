const commando = require('discord.js-commando');

class DieRoll100Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll100',
            group: 'simple',
            memberName: 'roll100',
            description: 'Lance un dé à 100 faces'
        });
    }
    
    async run (message, args) {
        var dieRoll = Math.floor(Math.random() * 100) + 1;
        message.reply("votre dé a atterri sur " + dieRoll);
    }
}

module.exports = DieRoll100Command;