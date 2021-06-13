const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
var prefix = "e!";
const ReactionRoleManager = require("discord-reaction-role");
const manager = new ReactionRoleManager(client, {
  storage: "./reaction-role.json"
});
client.reactionRoleManager = manager;


// NOUVEAU
const queue = new Map();

client.reactionRoleManager = manager;

client.on("ready", () => {
  console.log(
    `Oh tiens je m'appelle ${client.user.tag} (ID : ${client.user.id})`
  );
  {
  client.user.setActivity("Chante tutititutu tout en changeant pour ubuntu", {
  type: "STREAMING",
  url: "https://www.twitch.tv/eli__zay"
});
    
    }
});


client.login("ODUyOTEzNTUzMzI4NDM5MzM5.YMNvpQ.pwmlMjEiptQLYNOB-FBYlamubV0");
