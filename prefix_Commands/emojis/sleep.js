module.exports = {
    name: "sleep",
    description: "Enviar emote animado: (Dormir/Dormido)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:sleep:1037815897999552522>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:sleep:1037815897999552522>");
        } else {
            message.reply("<a:sleep:1037815897999552522>");
        };
    }
};