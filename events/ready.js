const { time } = require('discord.js');
const date = new Date();

module.exports = {
  name: "ready",
  run: (client) => {
    console.log(`${client.user.tag} is ready`);
    /*client.channels.fetch("1049366121104547892")
    .then(channel => channel.messages.channel.send(`I'm ready in **${channel.guild.name}** at ${time(date)}`))
    .catch(console.error);*/
  }
};