module.exports = {
    name: "wallhead",
    description: "Enviar emote animado: (Si)",
    options: [],
    run: (client, message, prefix, args) => {
        const target = message.mentions.users.map(u => u.id);
        if(message.content.match(`<@${target}>`)) {
            message.reply("<a:wallhead:1037815961937522778>");
        } else if(message.mentions.repliedUser === null) {
            message.delete();
            message.channel.send("<a:wallhead:1037815961937522778>");
        } else {
            message.reply("<a:wallhead:1037815961937522778>");
        };
    }
};