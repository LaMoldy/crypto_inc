import { Interaction } from "discord.js";

const once = false;
const name = "interactionCreate";

async function invoke(interaction: Interaction) {
  if (interaction.isCommand()) {
    (await import(`#commands/${interaction.commandName}`)).invoke(interaction);
  }
}

export { once, name, invoke };
