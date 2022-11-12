// Package imports
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  GatewayIntentBits,
} from "discord.js";
import * as dotenv from "dotenv";
import loadCommands from "./utils/discord";
import MessageLogger from "./utils/messages";

// Loads the dotenv file
dotenv.config();

// Creates new client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Logs in when ready
client.on("ready", () => {
  MessageLogger.infoMessage(`Logged in as ${client.user?.tag}`);
  MessageLogger.infoMessage(`Crypto Inc has started and is now awaiting commands.`);
});

// Does an event on iteraction creation
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  if (interaction.isButton()) {
  }

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }

  if (interaction.commandName === "button") {
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("primary")
        .setLabel("hello")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({ content: "Here is button", components: [row] });
  }
});

// Loads the commands
loadCommands();

// Logs in the bot
client.login(process.env.DISCORD_TOKEN);