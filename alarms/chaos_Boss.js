const { time } = require("discord.js")

module.exports = {
  name: "chaos_Boss",
  run: (client, cron) => {
    cron.schedule("20 17,23,5,11 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1068618115178578083> in 10 minutes`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
    cron.schedule("25 17,23,5,11 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1068618115178578083> in 5 minutes`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
    cron.schedule("30 17,23,5,11 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1068618115178578083> appeared`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
  }
};