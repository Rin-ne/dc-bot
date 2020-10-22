require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const chatList = require("./chatlist.js")

// const chatList = [{
//   trigger:"Hi, Viola", response: (r)=>{
//     return "Hi, "+r.author.username
//   }
// }]

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  chatList.forEach((r)=>{
    if(msg.content === r.trigger){
      msg.channel.send(r.response(msg))
    }
  })
  if (msg.content === '?help') {
    msg.channel.send('Viola Bot, has no use, just testing.');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
