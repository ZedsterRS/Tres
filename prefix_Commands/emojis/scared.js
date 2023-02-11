module.exports = {
    name: "scared",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:scared:1037816255442342008>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:scared:1037816255442342008>");
        } else {
            message.reply("<a:scared:1037816255442342008>");
        };
    }
};