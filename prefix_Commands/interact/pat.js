const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "pat",
   run: (client, message) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1028052916851970058")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url)).flat();
      if (message.content.includes(`<@${target_id}>`)) {
        const embed_tarjet = new EmbedBuilder()
          .setDescription(`**${autor}** acarició a **${target_u}**`)
          .setColor("Blue")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
          .setTimestamp()
          .setFooter({ text: `${autor}` })
        message.channel.send({ embeds: [embed_tarjet] });
      } else {
        const embed_autor = new EmbedBuilder()
          .setDescription(`Buen trabajo **${autor}**`)
          .setColor("Random")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
          .setTimestamp()
          .setFooter({ text: `${autor}` })
        message.reply({ embeds: [embed_autor] })
      };
      console.log(target_id[0])
    }))
    .catch(console.error);
  }
};