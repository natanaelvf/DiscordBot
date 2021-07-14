const cookie = require('./commands/cookie.js');
const swear = require('./commands/swear.js');
const help = require('./commands/help.js');
const gif = require('./commands/gif.js');

require('dotenv').config();

const commands = { cookie, swear, gif, help };

var globalPrefix = "!";

module.exports = async function(msg) {
  if (msg.author.bot) return;
  if (msg.channel.id == process.env.SERVERID || msg.channel.id == process.env.CHANNELID) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift().toLowerCase();
      if (msg.content.startsWith(globalPrefix)) {
	      prefix = globalPrefix;
      }
      command = command.substring(prefix.length);
      if (command == "prefix") {
	      globalPrefix = tokens[1];
	      msg.reply("you successfully changed the prefix to " + msg.content.split(' ')[1].toString());
      } else {
        commands[command](msg, tokens);
    } 
  }
};