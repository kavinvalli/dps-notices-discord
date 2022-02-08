require('dotenv').config();
const { Client, Intents } = require('discord.js');

const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.error('No token found!');
  process.exit(1);
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ['CHANNEL'],
});

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('pong!');
  }
});

client.login(token);

module.exports = { client };
