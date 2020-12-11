const Commando = require('discord.js-commando');

class taverne extends Commando.Command {
constructor(client)
    {
        super(client, {
            name: 'tavern',
            group: 'rpg',
            memberName: 'create_player',
            description: 'Crée un nouveau personnage'
        });
    }

    async run(message, args) {
        console.log("Il n'y a rien pour le moment.");
    }
}
