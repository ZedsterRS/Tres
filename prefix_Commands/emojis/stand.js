module.exports = {
    name: "yes",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:stand:1037816087141695558>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:stand:1037816087141695558>");
        } else {
            message.reply("<a:stand:1037816087141695558>");
        };
    }
};