const { time } = require("discord.js")

module.exports = {
  name: "temple_Team_Arena",
  run: (client, cron) => {
    cron.schedule("55 20 * * TUE,SAT", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1070829066820800663> en 5 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
    cron.schedule("0 21 * * TUE,SAT", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1070829066820800663> ha empezado`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
  }
};