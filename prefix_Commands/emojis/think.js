module.exports = {
    name: "think",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:think:1037815989875785878>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send(`<a:think:1037815989875785878>`).then(m => m.reply(`||By: ${message.author.username}||`));
        } else {
            message.reply("<a:think:1037815989875785878>");
        };
    }
};