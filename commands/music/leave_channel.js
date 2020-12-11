const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Quitte le salon vocal de l\'exécuteur'
        });
    }
    
    async run(message, args)
    {
        if (message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        }
        else {
            message.reply("Le Task Manager doit être présent dans un salon vocal avant de le quitter");
        }
    }
}

module.exports = LeaveChannelCommand;