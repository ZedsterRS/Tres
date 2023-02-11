module.exports = {
    name: "huh",
    description: "Enviar emote animado: (Huh)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:huh:1037816522804051970>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:huh:1037816522804051970>");
        } else {
            message.reply("<a:huh:1037816522804051970>");
        };
    }
};