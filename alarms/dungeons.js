const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "dungeons",
  run: (client, cron) => {
    cron.schedule("0 12 * * FRI", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => {
        const embed = new EmbedBuilder()
        .setAuthor({name: `${channel.guild.name}`, iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
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
        .setFooter({text: `${channel.guild.name}`, iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
        channel.messages.channel.send({ content: `@everyone Mazmorra y defensa hoy despues de pujar en reliquias.`, embeds: [embed]})
      })
      .catch(console.error);
    }, {
      schedule: true,
      timezone: "America/Caracas"
    });
    cron.schedule("20 20 * * FRI", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => channel.messages.channel.send(`@everyone Mazmorra en 1 hora`))
      .catch(console.error);
    }, {
      schedule: true,
      timezone: "America/Caracas"
    });
    cron.schedule("10 21 * * FRI", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => channel.messages.channel.send(`@everyone Mazmorras en 10 minutos, por favor entren al juego <:emoji_9:1032801853261496399>`))
      .catch(console.error);
    }, {
      schedule: true,
      timezone: "America/Caracas"
    });
    cron.schedule("20 21 * * FRI", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => channel.messages.channel.send(`@everyone La mazmorra iniciara pronto`))
      .catch(console.error);
    }, {
      schedule: true,
      timezone: "America/Caracas"
    })
  }
};