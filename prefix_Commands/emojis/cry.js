module.exports = {
    name: "cry",
    description: "Enviar emote animado: (Llorar)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:cry:1037816697891078254>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:cry:1037816697891078254>");
        } else {
            message.reply("<a:cry:1037816697891078254>");
        };
    }
};