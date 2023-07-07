const { time } = require("discord.js")

module.exports = {
  name: "lava_Valley",
  run: (client, cron) => {
    cron.schedule("55 20 * * THU,SUN", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1067957998259019806> en 5 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
    cron.schedule("0 21 * * THU,SUN", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1067957998259019806> ha empezado`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
  }
};