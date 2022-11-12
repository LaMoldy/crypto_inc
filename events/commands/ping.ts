import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

async function create() {
  const command = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!")
    .addUserOption((option) =>
      option.setName("user").setDescription("Shall I greet a user?")
    );

  return command.toJSON();
}

async function invoke(interaction: ChatInputCommandInteraction) {
  const user = interaction.options.getUser("user");

  if (user != null) {
    interaction.reply({ content: `Hello ${user}!` });
  } else {
    interaction.reply({
      content: "Pong!",
      ephemeral: true,
    });
  }
}

export { create, invoke };
