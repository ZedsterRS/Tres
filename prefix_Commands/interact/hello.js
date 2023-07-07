const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "hello",
   run: (client, message) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1028019833834590318")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url)).flat();
      if (message.content.includes(`<@${target_id}>`)) {
        const embed_tarjet = new EmbedBuilder()
          .setDescription(`**${autor}** está saludando a **${target_u}**`)
          .setColor("Random")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
          .setTimestamp()
          .setFooter({ text: `${autor}`})
        message.channel.send({ embeds: [embed_tarjet] });
      } else {
        const embed_autor = new EmbedBuilder()
          .setDescription(`Hola **${autor}**`)
          .setColor("Random")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
          .setTimestamp()
          .setFooter({ text: `${autor}` })
        message.reply({ embeds: [embed_autor] });
      }
    }))
    .catch(console.error);
  }
};