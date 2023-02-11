module.exports = {
    name: "blushes",
    description: "Enviar emote animado: (Sonrojo)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:blushes:1037780800738955334>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:blushes:1037780800738955334>");
        } else {
            message.reply("<a:blushes:1037780800738955334>");
        };
    }
};