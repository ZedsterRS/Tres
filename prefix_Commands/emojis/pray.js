module.exports = {
    name: "pray",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:pray:1037816334546894858>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:pray:1037816334546894858>");
        } else {
            message.reply("<a:pray:1037816334546894858>");
        };
    }
};