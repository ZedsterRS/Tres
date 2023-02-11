const { time } = require("discord.js")

module.exports = {
    name: "dungeons",
   run: (client, cron) => {
    cron.schedule("0 13 * * THU", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => channel.messages.channel.send(`t.schedule @everyone`))
      .catch(console.error);
    });
    cron.schedule("0 20 * * THU", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => channel.messages.channel.send(`@everyone dungeons in 1 hour`))
      .catch(console.error);
    });
    cron.schedule("50 20 * * THU", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => channel.messages.channel.send(`@everyone dungeons in 10 minutes, please enter the game <:emoji_9:1032801853261496399>`))
      .catch(console.error);
    });
    cron.schedule("0 21 * * THU", () => {
      client.channels.fetch("983799688941686846")
      .then(channel => channel.messages.channel.send(`@everyone dungeons will begin`))
      .catch(console.error);
    })
  }
};