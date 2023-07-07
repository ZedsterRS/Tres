module.exports = {
  name: "messageCreate",
  run: (client, messageCreate) => {
    const prefix = process.env.PREFIX;
    const prefix_2 = process.env.PREFIX_2;

    if(!messageCreate.content.startsWith(prefix)){
      if(!messageCreate.content.startsWith(prefix_2)) return
    };

    const args = messageCreate.content.slice(prefix.length).trim().split(/ +/g);
    const argCommand = args.shift().toLowerCase();
    let cmd = client.prefix_Commands.find((c) => c.name === argCommand);
		
    if(cmd) {cmd.run(client, messageCreate, args, prefix)};
  }
}