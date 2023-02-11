const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "Lista de comandos",
  options: [],
  run: (client, message, prefix, args) => {
    const embed = new EmbedBuilder()
      .setTitle("Info")
      .addFields(
        { name: '-Lista de Comandos Interactivos:', value: "`-hello`\n`-pat`", inline: false },
        { name: "Lista de Emojis Animados", value: "`-alert`",}
      )
      .setColor("Green")
      .setTimestamp()
    message.channel.send({ embeds: [embed] });
  }
};