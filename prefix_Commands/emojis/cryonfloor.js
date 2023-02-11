module.exports = {
    name: "cryfloor",
    description: "Enviar emote animado: (Llorar en el suelo)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:cryonfloor:1037816662331752608>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:cryonfloor:1037816662331752608>");
        } else {
            message.reply("<a:cryonfloor:1037816662331752608>");
        };
    }
};