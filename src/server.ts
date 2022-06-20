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
    let qrcode;
    axios
    .get(`https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=${msg.content}`)
    .then(res => {
      console.log(`statusCode: ${res.status}`);
    })
    .catch(error => {
      console.log(error);
    });
  }
});

client.login(process.env.BOT_TOKEN);