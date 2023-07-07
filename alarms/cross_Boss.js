module.exports = {
    name: "cross_Boss",
   run: (client, cron) => {
    cron.schedule("45 19,7 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1068618177531101204> en 15 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
    cron.schedule("55 19,7 * * *", () => {
      client.channels.fetch("1068606173646950450")
      .then(channel => channel.messages.channel.send(`<@&1068618177531101204> en 5 minutos`))
      .catch(console.error);
    }, {
      scheduled: true,
      timezone: "America/Caracas"
    });
  }
};