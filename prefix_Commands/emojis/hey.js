module.exports = {
    name: "hey",
    description: "Enviar emote animado: (Hey)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:hey:1037816558258507776>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:hey:1037816558258507776>");
        } else {
            message.reply("<a:hey:1037816558258507776>");
        };
    }
};