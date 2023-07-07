const { time } = require("discord.js")

module.exports = {
    name: "world_Boss",
   run: (client, cron) => {
    cron.schedule("15 16,22,4,10 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1068620878763528274> en 15 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
    cron.schedule("25 16,22,4,10 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1068620878763528274> en 5 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
  }
};