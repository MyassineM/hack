const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`TEXT`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")

   const Token = "`\`\` Token `\`\`"
client.on('message' , message => {
if (message.author.bot) return;
           if (message.content == '.')
           if (message.author.id === '436918120184021012'){
if (!message.channel.guild) return;
message.author.send("NTEzMzc4OTU0NDk3NzUzMDk4.DtWaxA.IQVd-sA0w97ecdalhS4qlLqSwAY")
}  
});
