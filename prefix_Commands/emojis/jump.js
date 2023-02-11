module.exports = {
    name: "jump",
    description: "Enviar emote animado: (Saltar)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:jump:1037816491908804718>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:jump:1037816491908804718>");
        } else {
            message.reply("<a:jump:1037816491908804718>");
        };
    }
};