const { time } = require("discord.js")

module.exports = {
    name: "field_Boss",
   run: (client, cron) => {
    cron.schedule("45 16,22,4,10 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1067955847663210597> en 15 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
    cron.schedule("55 16,22,4,10 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1067955847663210597> en 5 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
  }
};