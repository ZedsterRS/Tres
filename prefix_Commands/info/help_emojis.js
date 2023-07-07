const { EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "emojis",
  run: (client, message) => {
    const emojis = [];
    fs.readdirSync("./prefix_Commands/emojis").forEach((file) => {
      let emoji = require(`../emojis/${file}`);
      emojis.push(emoji.name);
    });
    const embed = new EmbedBuilder()
      .setTitle("Lista de emojis")
      .setDescription(`**- ${emojis.join('\n- ')}**`)
      .setColor("Green")
      .setTimestamp()
    message.channel.send({ embeds: [embed] });
  }
};