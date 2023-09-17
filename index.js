const { Client, GatewayIntentBits } = require("discord.js")
const dotenv = require("dotenv").config()
require("discord-reply");
const Tesseract = require("tesseract.js");


const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate',(message) => {
    if(message.attachments.size > 0){
        message.attachments.forEach(attachment => {
          console.log(attachment.proxyURL)
          var ImageURL = attachment.proxyURL;
          Tesseract.recognize(
            ImageURL,
            "eng",
            ).then(({ data: { text } }) => {
                message.reply(text);
              })
        });
      }
})


client.login(process.env.BOT_TOKEN)