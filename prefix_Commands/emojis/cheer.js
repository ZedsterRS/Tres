module.exports = {
    name: "cheer",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("a:cheer:1037816732473118911>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:cheer:1037816732473118911>");
        } else {
            message.reply("<a:cheer:1037816732473118911>");
        };
    }
};