module.exports = {
    name: "laugh",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:laugh:1037548808407625778>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:laugh:1037548808407625778>");
        } else {
            message.reply("<a:laugh:1037548808407625778>");
        };
    }
};