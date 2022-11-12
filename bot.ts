// Package imports
import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import loadCommands from "./discord";

// Loads the dotenv file
dotenv.config();

// Creates new client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Logs in when ready
client.on("ready",  () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

// Does an event on iteraction creation
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

// Loads the commands
loadCommands();

// Logs in the bot
client.login(process.env.DISCORD_TOKEN);
