module.exports = {
    name: "smile",
    description: "Enviar emote animado: (Sonrisa)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:smile:1037816216875696168>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:smile:1037816216875696168>");
        } else {
            message.reply("<a:smile:1037816216875696168>");
        };
    }
};