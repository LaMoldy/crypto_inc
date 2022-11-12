// Package imports
import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";
import MessageLogger from "./messages";

// Loads dotenv file
dotenv.config();

// Reloads the slash commands
export default function loadCommands(): void {
  // Creates a list of commands
  const commands = [
    {
      name: "ping",
      description: "Replies with pong!",
    },
    {
      name: "button",
      description: "Button",
    },
  ];

  const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_TOKEN as string
  );

  (async () => {
    try {
      MessageLogger.infoMessage("Refreshing application (/) commands");
      await rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID as string),
        {
          body: commands,
        }
      );
    } catch (error) {
      MessageLogger.errorMessage(
        "Problem encountered reloading application (/) commands"
      );
      console.log(error);
    }
  })();
}
