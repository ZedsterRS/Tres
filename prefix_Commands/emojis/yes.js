module.exports = {
    name: "yes",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:yes:1037454864621514762>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:yes:1037454864621514762>");
        } else {
            message.reply("<a:yes:1037454864621514762>");
        };
    }
};