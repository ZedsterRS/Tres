module.exports = {
    name: "mad",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:mad:1037816458484396122>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:mad:1037816458484396122>");
        } else {
            message.reply("<a:mad:1037816458484396122>");
        };
    }
};