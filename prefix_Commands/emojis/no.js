module.exports = {
    name: "no",
    description: "Enviar emote animado: (No)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:no:1037816429434646599>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:no:1037816429434646599>");
        } else {
            message.reply("<a:no:1037816429434646599>");
        };
    }
};