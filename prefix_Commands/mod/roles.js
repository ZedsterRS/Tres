const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "roles",
  run: (client, message) => {
    const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === client.user.id;
    };
		const embed = new EmbedBuilder()
      .setTitle(`Select your role`)
      .setDescription(`<:emoji_9:1032801853261496399>`)
      .setColor("Random")
      .setImage()
    message.channel.send({ embeds: [embed] }).then((async m =>
      m.react('👍') &&
      m.awaitReactions({ filter, time: 15_000 })
      .then(collected => m.reactions.cache.map(m => m.users.fetch({ limit: 10 })
      .then(m =>
        console.log(m)  
      )))
    ));
  }
}