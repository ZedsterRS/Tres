require("colors");
const fs = require("fs");

module.exports = (client) => {
    fs.readdirSync("./events").forEach((file) => {
        const event = require(`../events/${file}`);
        console.log(`- ${event.name} event loaded`.cyan);
        client.on(event.name, (...args) => event.run(client, ...args));
    });
}