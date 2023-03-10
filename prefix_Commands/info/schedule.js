const { EmbedBuilder, roleMention, Collection } = require("discord.js");

module.exports = {
  name: "schedule",
  run: (client, message) => {
    client.guilds.fetch(message.guildId)
    .then(channel =>{
      const embed = new EmbedBuilder()
      .setAuthor({name: `${channel.name}`, iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
      .setTitle("Horario:")
      .setDescription(`**Horario de la Defensa de reino y Mazmorra de reino.**\n\n**HorΓ‘rio da Defesa do Reino e Masmorras do Reino.**\n\u200B`)
      .setThumbnail("https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg")
      .addFields(
        {name: "[Jueves]/[Quinta Feira]:", value: `\u200B\n
        π²π½(Norte) - 17:00\n
        π²π½(Central) - 19:00\n
        π΅πͺπ¨π΄ - 20:00\n
        π»πͺπ©π΄ - 21:00\n
        π¨π±π¦π·π§π· - 22:00\n
        `},
      )
      .setColor("Green")
      .setTimestamp()
      .setFooter({text: `${channel.name}`, iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
    message.channel.send({ embeds: [embed] });
  })}
};