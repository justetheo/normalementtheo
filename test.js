const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setTitle("Bonjour la team")
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'test',
  };