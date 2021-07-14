const Discord = require('discord.js');

module.exports = function(msg, args) {

	if (args[0]) {
		const recipient = msg.mentions.users.first();
		return msg.reply("you gave: " + "<@" + recipient + ">"  + " a cookie!");
	} else {
		return msg.reply("you gave me a cookie!");
	}
}
