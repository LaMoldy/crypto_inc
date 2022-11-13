// Package imports
import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";
import * as fs from "node:fs";
import MessageLogger from "../utils/messages.js";

// Loads dotenv file
dotenv.config();

// Reloads the slash commands
export default function loadCommands() {
  // Sets the variables for the commands
  const commands = [];
  // Gets all the files with ts extension
  const commandFiles = fs
    .readdirSync("./events/commands")
    .filter((file) => file.endsWith(".ts"));

  // Creates route to discord
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

  // Adds teh commands to the array in JSON format

  (async () => {
    for (const file of commandFiles) {
      // Import the command file
      const command = await import(
        `#commands/${file.substring(0, file.length - 3)}`
      );

      // Pushes command to commands list
      commands.push(await command.create());
    }

    try {
      MessageLogger.infoMessage("Started reloading application (/) commands.");
      if (process.env.GUILD_ID === "dev") {
        await rest.put(
          Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            process.env.GUILD_ID
          ),
          { body: commands }
        );
      } else {
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
          body: commands,
        });
      }
    } catch (error) {
      MessageLogger.errorMessage(error.message);
    } finally {
      MessageLogger.infoMessage(
        "Successfully reloaded application (/) commands."
      );
    }
  })();
}
