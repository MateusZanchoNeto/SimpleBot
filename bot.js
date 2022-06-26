const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');


client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on('guildCreate', guild => {
    console.log(`O bot entrou nos servidores: ${guild.name} (id: ${guild.id}). Populacao: ${guild.memberCount} membros!`);
});

client.on('guildDelete', guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

client.on('message', async message => {

});


client.login(config.token);