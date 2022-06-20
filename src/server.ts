import 'dotenv/config';
import { Client, Intents } from 'discord.js';
import axios from 'axios';
import { config } from 'dotenv';

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
    let qrcode;
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

client.login(process.env.BOT_TOKEN);