module.exports = {
    name: "ok",
    description: "Enviar emote animado: (Ok)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:startok:1037816045232193547>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:startok:1037816045232193547>");
        } else {
            message.reply("<a:startok:1037816045232193547>");
        };
    }
};