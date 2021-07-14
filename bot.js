console.log('Setting up');

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
client.user.setActivity("with himself"); 
console.log('Listening');
}

console.log('requiring ./commands');
const commandHandler = require('./commands');

client.on('message', commandHandler);
