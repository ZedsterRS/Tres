module.exports = {
    name: "run",
    description: "Enviar emote animado: (Correr)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:run:1037816287595868276>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:run:1037816287595868276>");
        } else {
            message.reply("<a:run:1037816287595868276>");
        };
    }
};