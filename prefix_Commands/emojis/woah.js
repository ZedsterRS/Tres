module.exports = {
    name: "woah",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:woah:1037815914629972028>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:woah:1037815914629972028>");
        } else {
            message.reply("<a:woah:1037815914629972028>");
        };
    }
};