import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
} from "discord.js";

async function create() {
  const command = new SlashCommandBuilder()
    .setName("button")
    .setDescription("Test button");

  return command.toJSON();
}

async function invoke(interaction) {
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("primary")
      .setLabel("hello")
      .setStyle(ButtonStyle.Primary)
  );

  await interaction.reply({ content: "Here is button", components: [row] });
}

export { create, invoke };