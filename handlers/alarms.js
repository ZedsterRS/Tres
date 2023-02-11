require("colors");
const fs = require("fs");
const cron = require("node-cron");

module.exports = (client) => {
    fs.readdirSync("./alarms").forEach((file) => {
        const alarm = require(`../alarms/${file}`);
        console.log(`- ${alarm.name} alarm is loaded`.yellow);
        alarm.run(client, cron);
    });
}