const Discord = require('discord.js');

const replies = ['Damn!', 'Dang it!', 'Fork off', 'no', 'Frick!', 'Why? What You gonna do punk?', 'Try me', 'HA! No!', 'Maybe next time', 'ok, here it goes : frick'];

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Swearing: ')
	.addFields(
		{ name: replies[Math.floor(Math.random() * replies.length)] },
		{ name: '\u200B', value: '\u200B' },
	)
	.setTimestamp();

module.exports = function(msg, args) {
  msg.channel.send(exampleEmbed );
};
