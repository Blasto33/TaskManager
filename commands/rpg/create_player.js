const commando = require('discord.js-commando');
var fs = require('fs');

function checkUsername(username) {
    var username_corrected;

    if (username == "<Blasto>") {
        username_corrected = "Blasto";
    }
    if (username == "sɥɐqןɐpoʍ") {
        username_corrected = "Shabladow";
    }

    return (username_corrected);
}

function Generate_Character(username)
{
    var path = "./commands/rpg/players/" + username + ".json";
    var obj = {
        inventaire: []
     };
     
     fs.stat('path', function(err, stat) {
        if (err) {
            console.log("Le personnage existe déjà !");
        } else {
            obj.inventaire.push({name: "Potion de soin mineure", nombre: 3, description: "Rend 6 Points de Vie"});

            var json = JSON.stringify(obj);

            fs.writeFile(path, json, 'utf8');

            fs.readFile(path, 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    obj = JSON.parse(data); //Ici, il devient un objet
                    obj.inventaire.push({name: "Potion de mana mineure", nombre: 3, description: "Régénère 8 points de mana"}); //On ajoute des données
                    json = JSON.stringify(obj); //On le reconvertit en JSON
                    fs.writeFile(path, json, 'utf8'); // On le réécrit
                    console.log("[RPG.system] " + "Personnage correctement généré");
                }});
            }
     });
     return (0);
}

class CreatePlayerCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'create_player',
            group: 'rpg',
            memberName: 'create_player',
            description: 'Crée un nouveau personnage'
        });
    }

    async run(message, args) {
        var player_name = message.author.username;
        
        player_name = checkUsername(player_name);
        if ((Generate_Character(player_name)) == "Le personnage existe déjà !") {
            message.reply("Vous avez déjà créé un personnage. Supprimez-le ou continuer avec celui-ci !");
            console.log("[RPG.system] "+ "Failed: " + message.author.username + " a tenté de créer un personnage mais celui-ci existe déjà !");
        }
        else {
            message.reply("Votre personnage a été correctement généré !");
            console.log("[RPG.system] " + message.author.username + " a créé un personnage !");
        }
    }
}

module.exports = CreatePlayerCommand;