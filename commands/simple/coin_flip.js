const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Lance une pièce, qui peut soit tomber sur Pile, soit sur Face'
        });
    }
    
    async run (message, args) {
        var chance = Math.floor(Math.random() * 2);
        if (chance == 0) {
            message.reply("votre pièce a atterri sur Pile !");
        }
        else {
            message.reply("votre pièce a atterri sur Face !");
        }
    }
}

module.exports = CoinFlipCommand;