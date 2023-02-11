module.exports = {
    name: "gasp",
    description: "Enviar emote animado: (Gasp)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:gasp:1037816583994736640>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:gasp:1037816583994736640>");
        } else {
            message.reply("<a:gasp:1037816583994736640>");
        };
    }
};