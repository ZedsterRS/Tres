require("dotenv").config();
require("colors");
const { Client, REST, Routes, Partials, Events, GatewayIntentBits, Collection} = require("discord.js");
const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
const fs = require("fs");
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ], partials: [
    Partials.Message, Partials.Channel, Partials.Reaction
  ],
});

client.prefix_Commands = new Collection();
client.slash_Commands = new Collection();
const slash_Commands = [];

fs.readdirSync("./handlers").forEach((handler) => {
  require(`./handlers/${handler}`)(client, slash_Commands)
});

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(
      Routes.applicationCommands(process.env.BOT_CLIENT_ID),
      { body: slash_Commands },
    );
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

client.login(process.env.BOT_TOKEN);