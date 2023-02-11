module.exports = {
    name: "dance",
    description: "Enviar emote animado: (Baile)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:dance:1037816617301704755>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:dance:1037816617301704755>");
        } else {
            message.reply("<a:dance:1037816617301704755>");
        };
    }
};