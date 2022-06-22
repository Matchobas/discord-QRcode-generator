import 'dotenv/config';
import { Client, Intents } from 'discord.js';
import axios from 'axios';

const intents = new Intents();
intents.add(
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILDS,
);
const client = new Client({
  intents: intents,
});

client.on('ready', () => {
  console.log(`Logged in`);
});

client.on('messageCreate', msg => {
  if (msg.content === 'hey') {
    axios
    .get(`https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=https://github.com/Matchobas`)
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      if(res.config.url) {
        msg.reply(res.config.url);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

  const url = interaction.options.getString('url');
  const size = interaction.options.getNumber('size');

	if (commandName === 'code') {
    axios
    .get(`https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${url}`)
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      if(res.config.url) {
        interaction.reply(res.config.url);
      }
    })
    .catch(error => {
      console.log(error);
    });
	}
});

client.login(process.env.BOT_TOKEN);