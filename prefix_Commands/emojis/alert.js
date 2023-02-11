module.exports = {
    name: "alert",
    run: (client, message) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.includes(`<@${target}>`)) {
            message.reply("<a:alert:1037816766933520565>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:alert:1037816766933520565>");
        } else {
            message.reply("<a:alert:1037816766933520565>");
        };
    }
};