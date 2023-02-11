module.exports = {
    name: "party",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:party:1037816360807436368>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:party:1037816360807436368>");
        } else {
            message.reply("<a:party:1037816360807436368>");
        };
    }
};