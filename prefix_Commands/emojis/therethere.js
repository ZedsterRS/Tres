module.exports = {
    name: "there",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:therethere:1037816006883688630>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:therethere:1037816006883688630>");
        } else {
            message.reply("<a:therethere:1037816006883688630>");
        };
    }
};