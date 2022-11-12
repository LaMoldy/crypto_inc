import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

async function create() {
  const command = new SlashCommandBuilder()
    .setName("button")
    .setDescription("Test button");

  return command.toJSON();
}

async function invoke(interaction: ChatInputCommandInteraction) {
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("primary")
      .setLabel("hello")
      .setStyle(ButtonStyle.Primary)
  );

  await interaction.reply({ content: "Here is button", components: [row] });
}

export { create, invoke };