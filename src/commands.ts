import 'dotenv/config';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

const commands = [
  new SlashCommandBuilder()
  .setName('code')
  .setDescription('send QR code')
  .addNumberOption((option) => 
    option
      .setName('size')
      .setDescription('QR code image size to print')
      .setRequired(true)
  )
  .addStringOption((option) => 
    option
      .setName('url')
      .setDescription('URL to create QR code for')
      .setRequired(true)
  ),
].map(command => command.toJSON());

console.log(commands);
const rest = new REST({version: '10'}).setToken(
  String(process.env.BOT_TOKEN)
);

(async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(
      String(process.env.APP_ID),
      String(process.env.GUILD_ID)
    ), { body: commands }
  )} catch (error) {
    console.log(error);
  }
})();