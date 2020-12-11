const Commando = require('discord.js-commando');

class helpCommand extends Commando.Command {
    constructor(client)
    {
        super(client, {
            name: 'helpme',
            group: 'simple',
            memberName: 'helpme',
            description: 'Affiche les commandes disponibles'
        });
    }

    async run(message, args) {
        var prefix = '/';
        if (message.content === prefix + 'help') {
            console.log("[SYSTEM] " + message.author.username + "a demandé l'affichage du help");
        }
        console.log("[SYSTEM] " + message.author.username + " a demandé l'affichage du help");
    }
}

module.exports = helpCommand;