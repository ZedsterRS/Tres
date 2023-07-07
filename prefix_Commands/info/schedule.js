const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "schedule",
  run: (client, message) => {
    client.guilds.fetch(message.guildId)
    .then(guild => {
      const embed = new EmbedBuilder()
      .setAuthor({name: `${guild.name}`, iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
      .setTitle("Horario:")
      .setDescription(`**Horario de la Defensa de reino y Mazmorra de reino.**\n\n**Horário da Defesa do Reino e Masmorras do Reino.**\n\u200B`)
      .setThumbnail("https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg")
      .addFields(
        {name: "[Viernes]/[Sexta Feira]:", value: `\u200B\n
        :flag_mx: (Norte) - 17:20\n
        :flag_mx: (Central) - 19:20\n
        :flag_pe: :flag_co: :flag_pa:  - 20:20\n
        :flag_ve: :flag_do: :flag_cl: - 21:20\n
        :flag_ar: :flag_br:  - 22:20`
      })
      .setColor("Green")
      .setTimestamp()
      .setFooter({text: `${guild.name}`, iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
    message.reply( { embeds: [embed] });
  })}
};
