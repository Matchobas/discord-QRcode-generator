import 'dotenv/config';
import { Client, Intents } from 'discord.js';

const intents = new Intents();
intents.add(Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS);
const client = new Client({
  intents: intents,
});

client.on('ready', () => {
  console.log(`Logged in`);
});

client.on('messageCreate', msg => {
  if (msg.content === 'hey') {
    msg.channel.send('Hi my dud');
  }
});

client.login(process.env.BOT_TOKEN);