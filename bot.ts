// Package imports
import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import * as fs from "node:fs";
import loadCommands from "./utils/discord";
import MessageLogger from "./utils/messages";

// Loads the dotenv file
dotenv.config();

// Creates new client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

MessageLogger.infoMessage(
  "Starting reload of event to application (/) commands."
);

// Gets the command files by looking at the command directory
const events = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".ts"));

(async () => {
  // Check the event and run it
  for (const event of events) {
    const eventFile = await import(`#events/${event}`);

    // Check if the command is emitteed once
    if (eventFile.once) {
      client.once(eventFile.name, (...args) => {
        eventFile.invoke(...args);
      });
    } else {
      client.on(eventFile.name, (...args) => {
        eventFile.invoke(...args);
      });
    }
  }
})();

MessageLogger.infoMessage(
  "Successfully reloaded events for application (/) commands"
);

// Loads the commands
loadCommands();

// Logs in the bot
client.login(process.env.DISCORD_TOKEN);