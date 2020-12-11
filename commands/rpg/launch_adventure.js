const commando = require('discord.js-commando');
const Discord = require('discord.js');

class launchAnAdventure extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'launch_adv',
            group: 'rpg',
            memberName: 'launch_adv',
            description: 'Partez pour une aventure !'
        });
    }

    async run(message, args) {
        var player_name = message.author.username;
        var goldRoll = Math.floor(Math.random() * 20) + 1;
        var adv_embed = new Discord.RichEmbed()
            .addField("Vous partez dans la forêt avoisinante", "Voici ce que vous avez trouvé :")
            .addField("Or : ", goldRoll)
        message.channel.sendEmbed(adv_embed);

        
    }
}

module.exports = launchAnAdventure;