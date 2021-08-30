const Discord = require('discord.js');
const client = new Discord.Client();
 
// Une  fois connecté
client.on('ready', () => {
    console.log(
      `Oh tiens je m'appelle ${client.user.tag} (ID : ${client.user.id})`
    );
    })

    // Importer node-fetch pour l'utiliser dans le code
  var fetch = require('node-fetch');
 
// Toutes les 4 minutes (240000 ms)
setInterval(() => {
  // Faire une requête
  fetch("https://elbot-test.glitch.me/").catch(err => console.log("Impossible d'effectuer une requête :" + err))
 }, 240000);

   // Toutes les 4 minutes (240000 ms)
   setInterval(() => {
    // Faire une requête
    fetch("https://ac-v2.glitch.me/").catch(err => console.log("Impossible d'effectuer une requête : " + err))
   }, 240000);


   // Toutes les 4 minutes (240000 ms)
   setInterval(() => {
    // Faire une requête
    fetch("https://rmxbot-test.glitch.me/").catch(err => console.log("Impossible d'effectuer une requête : " + err))
   }, 240000);


    client.on('message', message => {
      // Du code ici
      if (message.content === ("e;test"))
      message.channel.send("Le reveilleur est en ligne.")
  

      if (message.content === ("e;bot"))
      message.channel.send("> En ce moment je réveille: \n -Elbot \n -Rmxbot \n -AntiCoupable V2")
    //Ping
    if (message.content === "e;ping") {
      if (message.author.bot === true) return;
      message.channel.send(
        "Mon ping est de " +
          client.ws.ping +
          " ms"
      );
      }
    });
  client.login('TOURNE TES YEUX')
