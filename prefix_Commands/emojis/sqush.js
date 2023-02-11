module.exports = {
    name: "sqush",
    description: "Enviar emote animado: (Sqush)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:sqush:1037816196600446987>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:sqush:1037816196600446987>");
        } else {
            message.reply("<a:sqush:1037816196600446987>");
        };
    }
};