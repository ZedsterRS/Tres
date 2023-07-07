const { EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "help",
  description: "Lista de comandos",
  options: [],
  run: (client, message) => {
    const interacts = [];
    fs.readdirSync("./prefix_Commands/interact").forEach((file) => {
      let interact = require(`../interact/${file}`);
      interacts.push(interact.name);
    });
    const embed = new EmbedBuilder()
      .setTitle("Info")
      .addFields(
        { name: '-Lista de Comandos Interactivos:', value: `**- ${interacts.join(`\n- `)}**`, inline: false },
      )
      .setColor("Green")
      .setTimestamp()
    message.channel.send({ embeds: [embed] });
    console.log(interacts)
  }
};