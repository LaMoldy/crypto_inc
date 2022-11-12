// Package imports
import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";

// Loads dotenv file
dotenv.config();

export default function loadCommands(): void {
  // Creates a list of commands
  const commands = [
    {
      name: "ping",
      description: "Replies with pong!",
    },
  ];

  const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_TOKEN as string
  );

  (async () => {
    try {
      console.log("Refreshing application (/) commands");
      await rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID as string),
        {
          body: commands,
        }
      );
    } catch (error) {
      console.log(error);
    }
  })();
}