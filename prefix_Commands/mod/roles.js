const { EmbedBuilder } = require("discord.js");
module.exports = {
	name: "roles",
  run: (client, message) => {
    const filter = (reaction, user) => {
      return ["\:one:", "\:two:", "\:three:", "\:four:", "\:five:"].includes(reaction.emoji.name) && user.id === client.user.id;
    };
		const embed = new EmbedBuilder()
      .setTitle(`Select your role`)
    	.setDescription(`:one: <@&1078399311697694880>\n\n:two: <@&1078399360464863373>\n\n:three: <@&1078399387417464882>\n\n:four: <@&1078399437795233862>\n\n:five: <@&1078399476919705750>`)
      .setColor("Random")
      .setImage()
    message.channel.send({ embeds: [embed] }).then((async m =>
      m.react("") &&
      m.awaitReactions({ filter, time: 15_000 })
      .then(collected => m.reactions.cache.map(m => m.users.fetch({ limit: 10 })
      .then(m =>
        console.log(m)  
      )))
    ));
  }
}
