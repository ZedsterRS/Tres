const { EmbedBuilder, Collection } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "emojis",
  run: (client, message) => {
    const emojis = [];
    fs.readdirSync("./commands/emojis").forEach((file) => {
      let emoji = require(`../emojis/${file}`);
      emojis.push(emoji.name);
    });
    const emoji_name = emojis.map(e => e.name);
    const embed = new EmbedBuilder()
      .setTitle("Lista de emojis")
      .setDescription(`**- ${emoji_name.join('\n- ')}**`)
      .setColor("Green")
      .setTimestamp()
    message.channel.send({ embeds: [embed] });
  }
};