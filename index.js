/**
 * Module Imports
 */
const { Client, Collection } = require("discord.js");
const client = require('discord.js')
const { readdirSync } = require("fs");
const { join } = require("path");
const TOKEN = '';
const PREFIX = '+'
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const db = require('quick.db')

/**
 * Client Events
 */
client.on('ready', () =>{
    console.log('Application Bot has started')
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "STREAMING"}});
    client.user.setActivity(`+help to ${client.users.cache.size} users in Dank Trades`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/applicationbotdiscord"
      });
});

// Application Bot Code 

// First Command +help
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+help') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
     if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+help', '``Shows all the bot commands | This same message``', true)
      .addField('+positions', '``Shows staff positions``', true)
      .addField('+apply', '``Sends you DM link to apply for the position you have chosen``', true)
      .addField('+logs', '``Staff Responses only accessaible by Admins``', true)
      .setDescription('Here are my commands')
	  .addField('+suggest', '``DMs link for suggestion form``', true)
    .addField('+embed', '``Send embeded messages [+embed <message>]``', true)
    .addField('+say', '``Make the bot say a message [+say <message>]``', true)
    .addField('+announce', '``Make the bot announce a message [+announce <message>]``', true)
    .addField('+afk', '``Set your AFK Status``', true)
    .addField('+dice or +roll', '``Roll a dice``', true)
    .addField('+flip or +toss', '``Flip a coin``', true)
    .addField('+uptime', '``Check the bots uptime``', true)
      .addField('+ping', '``Sends Bot\'s ping``', true)
       .addField('+userinfo | +ui', '``Userinfo Command``', true)
       .addField('+serverinfo | +si', '``Serverinfo Command``', true)
       .addField('+urban', '``Get a word meaning!``', true)
      .addField('+math', '``Math Calculations``', true)
      .addField('+ascii', '``Convert text to ASCII format``', true)
      .setFooter('Applications Bot [Use +help <command> for more info on each command]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

// Command 4 +help positions

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+help positions') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
     if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+help positions', 'Command shows you the staff positions you can apply for. You can use the alasis', true)
	  .addField('Usage', '+positions', true)
	  .addField('Example Usage', '+positions', true)
      .setDescription('Application Bot Help Command')
      .setFooter('Applications Bot [Use +help <command> for more info on each command]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
// Command 5 +help apply
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+help apply') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
     if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+help positions', 'Command shows you the staff positions you can apply for', true)
	  .addField('Usage', '+apply <Position Name or alasis>', true)
	  .addField('Example Usage', '+apply trial moderator | +apply tm', true)
      .setDescription('Application Bot Help Command')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
// Command 6 +help logs
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+help logs') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
     if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+help logs', 'Shows application logs. Admin only accessible command', true)
	  .addField('Usage', '+logs', true)
      .setDescription('Application Bot Help Command')
      .setFooter('Applications Bot [Your application is always safe with us we dont leak it out anywhere]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
// Command 7 +help apply logs
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+help apply logs') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
     if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+help logs', 'Shows application logs. Admin only accessible command', true)
	  .addField('Usage', '+logs', true)
      .setDescription('Application Bot Help Command')
      .setFooter('Applications Bot [Your application is always safe with us we dont leak it out anywhere]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
// Command 8 +positions 
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+positions') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
     if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+apply admin or +apply a | Status: CLOSED', 'Sends you link for admin applications', true)
      .addField('+apply trial moderator or +apply tm | Status: OPEN', 'Sends you link for trial moderator applications', true)
      .addField('+apply giveaway manager or +apply gm | Status: OPEN', 'Sends you link for giveaway manager applications', true)
      .addField('+apply heist manager or +apply hm | Status: OPEN', 'Sends you link for heist manager applications', true)
      .setDescription('Application Bot Help Command')
      .setFooter('Applications Bot [Your application is always safe with us we dont leak it out anywhere]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
// Command 9 +ping
client.on('message', async message => {
  if (message.content.startsWith('+ping')) {
      if(message.channel.type === 'dm') return;
   const embed = new MessageEmbed()
      .setDescription('`Pinging...`')
      .setColor(message.guild.me.displayHexColor);    
    const msg = await message.channel.send(embed);
    const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp; // Check if edited
    const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
    const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
    embed.setTitle(`Pong! 🏓`)
      .setDescription('')
      .addField('Latency', latency, true)
      .addField('API Latency', apiLatency, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
      msg.edit(embed)
  }
});
// Command 10 +help suggest
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+help suggest') {
    if(message.channel.type === 'dm') return;
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+help suggest', 'Bot Suggestion? Use +suggest and the bot will DM you form link for suggestion form', true)
	  .addField('Usage', '+suggest', true)
	  .addField('Example Usage', '+suggest', true)
      .setDescription('Application Bot Help Command')
      .setFooter('Applications Bot [Suggestion form is no way related to DANK TRADES]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
// Command 11 +apply trial moderator
client.on('message', message => {
  if (message.content === '+apply trial moderator') {
    if(message.channel.type === 'dm') return;
    message.react('751425803778261043');
    const embed = new MessageEmbed()
      .setTitle('Trial Moderator Application')
      .setColor("RANDOM")
      .addField("Link to application", "To view and fill the Trial Mod application form  [Click Here](https://forms.gle/7jnAxxjJuMZeaPRt5)")	  
      .addField('Important!!', 'Make sure you apply truthfully. Do not ask staff if your application has been recieved or not, doing such will lead to no response. If you filled and submitted it then we will recieve it so asking is useless.', true)
      .setDescription('Trial Moderator Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 12 +apply tm
client.on('message', message => {
  if (message.content === '+apply tm') {
    if(message.channel.type === 'dm') return;
    message.react('751425803778261043');
    const embed = new MessageEmbed()
      .setTitle('Trial Moderator Application')
      .setColor("RANDOM")
      .addField("Link to application", "To view and fill the Trial Mod application form [Click Here](https://forms.gle/7jnAxxjJuMZeaPRt5)")	  
      .addField('Important!!', 'Make sure you apply truthfully. Do not ask staff if your application has been recieved or not, doing such will lead to no response. If you filled and submitted it then we will recieve it so asking is useless.', true)
      .setDescription('Trial Moderator Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 13 +apply admin
client.on('message', message => {
  if (message.content === '+apply admin') {
    if(message.channel.type === 'dm') return;
    message.react('❌');
    const embed = new MessageEmbed()
      .setTitle('Admin Application')
      .setColor("RANDOM")
      .addField('Link', 'Applications for Admin are currently closed Sorry!!', true)
	  .addField('Note', 'You will be informed when the application re-open', true)
      .setDescription('Admin Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 14 +apply a
client.on('message', message => {
  if (message.content === '+apply a') {
    if(message.channel.type === 'dm') return;
    message.react('❌');
    const embed = new MessageEmbed()
      .setTitle('Admin Application')
      .setColor("RANDOM")
      .addField('Link', 'Applications for Admin are currently closed Sorry!!', true)
	  .addField('Note', 'You will be informed when the application re-open', true)
      .setDescription('Admin Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 15 +apply giveaway manager
client.on('message', message => {
  if (message.content === '+apply giveaway manager') {
    if(message.channel.type === 'dm') return;
    message.react('751425803778261043');
    const embed = new MessageEmbed()
      .setTitle('Giveaway Manager Application')
      .setColor("RANDOM")
       .addField("Link to application", "To fill out the Giveaway Manager Applications [Click here](https://forms.gle/Cz5ijYvSyrBJDmJC6)")
	  .addField('Important!!', 'Apply truthfully. Do not DM any staff asking if your application is accepted or not. In case if you ask any staff it will lead to no response and deletion of your response.', true)
      .setDescription('Giveaway Manager Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 16 +apply gm
client.on('message', message => {
  if (message.content === '+apply gm') {
    if(message.channel.type === 'dm') return;
    message.react('751425803778261043');
    const embed = new MessageEmbed()
      .setTitle('Giveaway Manager Application')
      .setColor("RANDOM")
      .addField("Link to application", "To fill out the Giveaway Manager Applications [Click here](https://forms.gle/Cz5ijYvSyrBJDmJC6)")
	  .addField('Important!!', 'Apply truthfully. Do not DM any staff asking if your application is accepted or not. In case if you ask any staff it will lead to no response and deletion of your response.', true)
      .setDescription('Giveaway Manager Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 17 +apply heist manager
client.on('message', message => {
  if (message.content === '+apply heist manager') {
    if(message.channel.type === 'dm') return;
    message.react('751425803778261043');
    const embed = new MessageEmbed()
      .setTitle('Heist Manager Application')
      .setColor("RANDOM")
      .addField('Link', 'https://forms.gle/Xgtq8Zs8LUwLm9dz6', true)
	  .addField('Important!!', 'Apply truthfully. Do not DM any staff asking if your application is accepted or not. In case if you ask any staff it will lead to no response and deletion of your response.', true)
      .setDescription('Heist Manager Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 18 +apply hm
client.on('message', message => {
  if (message.content === '+apply hm') {
    message.react('751425803778261043');
      if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      .setTitle('Heist Manager Application')
      .setColor("RANDOM")
      .addField("Link to application", "To fill out the Heist Manager Applications [Click here](https://forms.gle/Xgtq8Zs8LUwLm9dz6)")
	  .addField('Important!!', 'Apply truthfully. Do not DM any staff asking if your application is accepted or not. In case if you ask any staff it will lead to no response and deletion of your response.', true)
      .setDescription('Heist Manager Application')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
// Command 19 +apply logs
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+apply logs")) {
    if(message.channel.type === 'dm') return;
     if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send("You don't have permision to view application logs");
    message.react('❌')
  }
  else {
    message.react('751425803778261043')
      const embed = new MessageEmbed()
      .setTitle('Application Bot Logs')
      .setColor("RANDOM")
	  .addField("Trial Moderator Logs", "To find the Trial Moderator Logs [Click here](https://docs.google.com/spreadsheets/d/1MXsIPc0H7AmYj0SImNgGdDjflZoe1t4TzXlN-DroSl4/edit#gid=1285064641)")
      .addField("Giveaway Manager Logs", "To find the Giveaway Manager Logs [Click here](https://docs.google.com/spreadsheets/d/1IJXO7FtZLzL-1SvSIsOdpbmIF92qqcLumQZWRNuNw2I/edit#gid=1776443217)")
	 .addField("Heist Manager Logs", "To find the Heist Manager Logs [Click here](https://docs.google.com/spreadsheets/d/1Uf_ydBAPsaWL3hYD-RXL813teRgbtDf8IYGQx7QtzGA/edit#gid=914966967)")
      .setDescription('Application Bot Logs')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
  }
});
// Command 20 +logs
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+logs")) {
    if(message.channel.type === 'dm') return;
     if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send("You don't have permision to view application logs");
    message.react('❌')
  }
  else {
    message.react('751425803778261043')
      const embed = new MessageEmbed()
      .setTitle('Application Bot Logs')
      .setColor("RANDOM")
	  .addField("Trial Moderator Logs", "To find the Trial Moderator Logs [Click here](https://docs.google.com/spreadsheets/d/1MXsIPc0H7AmYj0SImNgGdDjflZoe1t4TzXlN-DroSl4/edit?usp=sharing)")
      .addField("Giveaway Manager Logs", "To find the Giveaway Manager Logs [Click here](https://docs.google.com/spreadsheets/d/1IJXO7FtZLzL-1SvSIsOdpbmIF92qqcLumQZWRNuNw2I/edit#gid=1776443217)")
	 .addField("Heist Manager Logs", "To find the Heist Manager Logs [Click here](https://docs.google.com/spreadsheets/d/1Uf_ydBAPsaWL3hYD-RXL813teRgbtDf8IYGQx7QtzGA/edit#gid=914966967)")
      .setDescription('Application Bot Logs')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
  }
});
// Command 21 +suggest
client.on('message', message => {
  if (message.content === '+suggest') {
    message.react('751425803778261043');
      if(message.channel.type === 'dm') return;
    const embed = new MessageEmbed()
      .setTitle('Suggestion')
      .setColor("RANDOM")
      .addField('Link', 'https://forms.gle/1D4VQLHUoWL41m2t5', true)
	  .addField('Thank you for the suggestion', 'Hope you liked the bot!!', true)
      .setDescription('Application Bot Logs')
      .setFooter('Applications Bot [Dont know what positions to apply for? Use +positions]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
      message.author.send(embed);
  }
});
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '+help ping') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Application Bot Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('+ping', 'Shows Latency and API Latency.', true)
      .setDescription('Application Bot Help Command')
      .setFooter('Applications Bot [Use +help <command> for more info on each command]', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png')
      .setTimestamp()
      .setAuthor('Application Bot', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png', 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+say")) {
    if (message.author.bot) return false;
      if(message.channel.type === 'dm') return;
 let lel = message.content.substring(5)
 if (!lel) return false;
 message.channel.send(lel)
 message.delete()
  }
});
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+toss")) {
     if(message.channel.type === 'dm') return;
   var choices = [
     "HEADS",
     "TAILS"
   ];
   var output = choices[Math.floor(Math.random()*choices.length)];
   
    message.channel.send(`You fliped a coin and it landed on **${output}**`);
    
  }
});
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+flip")) {
     if(message.channel.type === 'dm') return;
   var choices = [
     "HEADS",
     "TAILS"
   ];
   var output = choices[Math.floor(Math.random()*choices.length)];
   
    message.channel.send(`You fliped a coin and it landed on **${output}**`);
    
  }
});
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+announce")) {
  if(message.channel.type === 'dm') return;
    if (!message.member.hasPermission('BAN_MEMBERS')) {
    message.channel.send("You don't have permision to announce text in Announcement Channel");
  }
  else {
    if (!announcement) return false;
    let announcement = message.content.substring(10);
    let announcementChannel = client.channels.cache.get('720154188868485150');
    if (announcementChannel){
      announcementChannel.send(announcement)
    };
  }
  }
});
client.on("message", (message) => {
    if(message.channel.type === 'dm') return;
  if (message.content.toLocaleLowerCase().startsWith("+roll")) {
  let dice = Math.floor(Math.random() * 6) + 1 - 1 + 1;
    message.reply("You rolled a " + dice);
  }
});
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+dice")) {
   if(message.channel.type === 'dm') return;
  let dice = Math.floor(Math.random() * 6) + 1 - 1 + 1;
    message.reply("You rolled a " + dice);
  }
});
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+embed")) {
    if(message.channel.type === 'dm') return;
    if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send("You don't have permision to send embeded messages");
     message.delete()
  }
  else {
    let embedContent = message.content.substring(7);
    if (!embedContent) return false;
    let embed = new Discord.MessageEmbed();
    embed.addField('Message', embedContent);
    embed.setColor("RANDOM");
    embed.setTitle(`${message.author.tag}'s message`);
    embed.setTimestamp();
    embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
    embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
    message.channel.send(embed);
    message.delete()
  } 
  }
});
client.on('message', message => {
    if(message.channel.type === 'dm') return;
// checks if the message author is afk
if(db.has(message.author.id + '.afk')){
message.channel.send(`Welcome back ${message.author} I removed your AFK.`)
db.delete(message.author.id + '.afk')
db.delete(message.author.id + '.messageafk')
}
    if (message.content.startsWith('+afk')) {
      message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
// then here you use the database :
db.set(message.author.id + '.afk','true')
db.set(message.author.id + '.messageafk', message.content.split(' ').slice(2))

// i made .slice(2) so that in the message array it also delete the command and the "start-afk"
    }
    if (message.content.includes('+afk off')) {
  if(message.channel.type === 'dm') return;
// Here you delete it
db.delete(message.author.id + '.afk')
db.delete(message.author.id + '.messageafk')
    }
});

client.on('message', message =>{
// If one of the mentions is the user
message.mentions.users.forEach(user =>{
  if(message.channel.type === 'dm') return;
  if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
if(db.has(user.id + '.afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK.. Leave a message if urgent by DMing him or just <a:dv_peepHahaFuckOff:755064262673825792>`)
})
})
//  Auto-Reacts
// badRyuk
client.on('message', message => {
	if (message.content === 'badRyuk') {
		message.react('751660075633999873')
	}
});

client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("badryuk")) {
    message.react('751660075633999873')
  }
});

client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("ryuk")) {
    message.react('751660075633999873')
  }
});

client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("yalk")) {
    message.react('751660075633999873')
  }
});

// abC
client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("abc")) {
    // message.react('747288654270955521')
    message.react('757121888068567050')
    // message.channel.send('Imagine not having an auto-react <a:haha:751424970755932190>')
  }
});

// Ping Auto-react  badRyuk
 client.on("message", message => {
    // if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
      if(message.channel.type === 'dm') return;

    if (message.mentions.has('726452843606966405')) { 
		message.react('753654454171205712')
			.then(() => message.react('753655360975273995'))
			.then(() => message.react('753655634418860224'))
      .then(() => message.react('753655715067068538'))
      .then(() => message.react('753655846076022904'))
      .then(() => message.react('753655916829606038'))
			.catch(() => console.error('One of the emojis failed to react.'));
    };
});
// TheGhost Autoreact
client.on("message", message => {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if(message.channel.type === 'dm') return;
    if (message.mentions.has('760773438775492610')) { 
		message.react('765120683428282389')
    };
});

// Yuki Auto-react [mistyyuki#1223]
client.on("message", message => {
    // if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has('621351428237295616')) { 
		message.react('753323433189965854')
    };
});
 
 // ceee Auto-React
client.on("message", message => {
    // if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has('696754560429064263')) { 
		message.react('746443757255131307')
    };
});
 // Application Bot
client.on("message", message => {
    // if (message.author.bot) return false;
  if(message.channel.type === 'dm') return;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has('733293763501490176')) { 
		message.channel.send('> My prefix is ``+``! Use ``+help`` to view all my commands.')
    };
});
// Uptime Command -- +Uptime
client.on('message', message =>{
   if (message.content.toLocaleLowerCase().startsWith("+uptime")) {
    if(message.channel.type === 'dm') return;
     const moment = require('moment');
      const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
    const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
     const embed = new MessageEmbed()
      .setTitle('Application Bot\'s Uptime')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
      .setDescription(`\`\`\`prolog\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
      .addField('Date Launched', date) 
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed)
 }
});
// remindme command
client.on('message', msg => {
 if (msg.content.toLowerCase().startsWith('+remindme')) {
     if(message.channel.type === 'dm') return;
		var message = msg;
		try {
			
			// Variables
			var returntime;
			var timemeasure;
			msg = msg.content.split(' ');
      message.channel.send('Alright your remainder was set...')
			console.log('Remainder set for ' + message.author.id + ' at ' + Date.now().toString());

			// Sets the return time
			timemeasure = msg[1].substring((msg[1].length - 1), (msg[1].length))
			returntime = msg[1].substring(0, (msg[1].length - 1))

			// Based off the delimiter, sets the time
			switch (timemeasure) {
				case 's':
					returntime = returntime * 1000;
					break;

				case 'm':
					returntime = returntime * 1000 * 60;
					break;

				case 'h':
					returntime = returntime * 1000 * 60 * 60;
					break;

				case 'd':
					returntime = returntime * 1000 * 60 * 60 * 24;
					break;

				default:
					returntime = returntime * 1000;
					break;
			}

			// Returns the Message
			client.setTimeout(function () {
				// Removes the first 2 array items
				msg.shift();
				msg.shift();

				// Creates the message
				var content = msg.join();
				message.author.send(`You had asked me to remind you about: ` + content);
       console.log('Remainder sent to ' + message.author.id + ' at ' + Date.now().toString())
			}, returntime)
		} catch (e) {
			message.reply("An error has occured, please make sure the command has a time delimiter and message");
			console.error(e.toString());
		}
	} 
  });
  client.on("message", (message) => {
  if (message.content.toLocaleLowerCase().startsWith("+ae")) {
      if(message.channel.type === 'dm') return;
  if (message.author.bot) return;
    if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send("You don't have permision to send embeded messages");
  }
 
  else {
    let embedContent = message.content.substring(3);
    if (!embedContent) return false;
    let embed = new Discord.MessageEmbed();
    let announcementChannel = client.channels.cache.get('720154188868485150');
    embed.addField('Message', embedContent);
    embed.setColor("RANDOM");
    embed.setTitle(`${message.author.tag}'s message`);
    embed.setTimestamp();
    embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
   embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
    announcementChannel.send(embed);
  } 
  }
});
client.on('message', message =>{
   if (message.content.toLocaleLowerCase().startsWith("+brrandom")) {
       if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send("You don't have permision LMAO");
  }
    const Guild = client.guilds.cache.get("719180744311701505");

    if (!Guild) return console.error("Couldn't find the guild.");
 
    const Role = Guild.roles.cache.find(role => role.name == "・badRyuk");
    // You should really use the ES6 syntax for this.
    // Instead of: Guild.roles.find("name", "Admin");

    if (!Role) return console.error("Couldn't find the role.");
// Code in here
var colors = ['#8585ff','#fff681','#a073fd','#fd73b9', '#9E90E9', '#7289DA', '#F591AD', '#AAB9CD', '#3F9FDF', '#16A067', '#858585', 'FF00BD', '#FEC92C', '#FFFEFF', '#FF0001', '#05EE50', '#03FFFE', '#ED5555', '#B4C468', '#B8A7EA', '#B7E0DC', '#BDD1A0', '#0BB5FF'];
    var random = Math.floor(Math.random() * colors.length);
Role.edit ({
            color: colors[random]
        })
   }
});
const { stripIndent } = require('common-tags');
client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().startsWith("+members")) {
const members = message.guild.members.cache.array();
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
     const streaming =  members.filter((m) => m.presence.status === 'streaming').length;
    const embed = new MessageEmbed()
      .setTitle(`Member Status [${message.guild.members.cache.size}]`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(stripIndent`
        <:Online:757607672093737121> **Online:** \`${online}\` members
      <:DoNotDisturb:758258980765827073> **Busy:** \`${dnd}\` members
        <:Idle:758258937903448065> **AFK/Idle:** \`${afk}\` members
        <:Offline:757607738925776899> **Offline:** \`${offline}\` members
      `)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
    }
});

client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().startsWith("+si")) {
    // Get roles count
const region = {
  'us-central': ':flag_us:  `US Central`',
  'us-east': ':flag_us:  `US East`',
  'us-south': ':flag_us:  `US South`',
  'us-west': ':flag_us:  `US West`',
  'europe': ':flag_eu:  `Europe`',
  'singapore': ':flag_sg:  `Singapore`',
  'japan': ':flag_jp:  `Japan`',
  'russia': ':flag_ru:  `Russia`',
  'hongkong': ':flag_hk:  `Hong Kong`',
  'brazil': ':flag_br:  `Brazil`',
  'sydney': ':flag_au:  `Sydney`',
  'southafrica': '`South Africa` :flag_za:'
};
const moment = require('moment');
const verificationLevels = {
  NONE: '`None`',
  LOW: '`Low`',
  MEDIUM: '`Medium`',
  HIGH: '`High`',
  VERY_HIGH: '`Highest`'
};
const notifications = {
  ALL: '`All`',
  MENTIONS: '`Mentions`'
};

    const roleCount = message.guild.roles.cache.size - 1; // Don't count @everyone
    
    // Get member stats
    const members = message.guild.members.cache.array();
    const memberCount = members.length;
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
    const bots = members.filter(b => b.user.bot).length;
    
    // Get channel stats
    const channels = message.guild.channels.cache.array();
    const channelCount = channels.length;
    const textChannels = 
      channels.filter(c => c.type === 'text' && c.viewable).sort((a, b) => a.rawPosition - b.rawPosition);
    const voiceChannels = channels.filter(c => c.type === 'voice').length;
    const newsChannels = channels.filter(c => c.type === 'news').length;
    const categoryChannels = channels.filter(c => c.type === 'category').length;
    
    const serverStats = stripIndent`
      Members  :: [ ${memberCount} ]
               :: ${online} Online
               :: ${dnd} Busy
               :: ${afk} AFK/Idle
               :: ${offline} Offline
               :: ${bots} Bots
      Channels :: [ ${channelCount} ]
               :: ${textChannels.length} Text
               :: ${voiceChannels} Voice
               :: ${newsChannels} Announcement
               :: ${categoryChannels} Category
      Roles    :: [ ${roleCount} ]
    `;

    const embed = new MessageEmbed()
      .setTitle(`${message.guild.name}'s Information`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField('ID', `\`${message.guild.id}\``, true)
      .addField('Region', region[message.guild.region], true)
      .addField(`<:Owner:758290691985113119> Owner`, message.guild.owner, true)
      .addField('<a:Verified:751425803778261043> Verification Level', verificationLevels[message.guild.verificationLevel], true)
      .addField('<:p_pepeRules:758292973393018922> Rules Channel', 
        (message.guild.rulesChannel) ? `${message.guild.rulesChannel}` : '`None`', true
      )
      .addField('<a:ranbooster:758291290348584970> System Channel', 
        (message.guild.systemChannel) ? `${message.guild.systemChannel}` : '`None`', true
      )
      .addField('<:Idle:758258937903448065> AFK Channel', 
        (message.guild.afkChannel) ? `${message.guild.afkChannel.name}` : '`None`', true
      )
      .addField('<:Idle:758258937903448065> AFK Timeout', 
        (message.guild.afkChannel) ? 
          `\`${moment.duration(message.guild.afkTimeout * 1000).asMinutes()} minutes\`` : '`None`', 
        true
      )
      .addField('<a:announcement:758288397579845652> Default Notifications', notifications[message.guild.defaultMessageNotifications], true)
      .addField('<:PartneredServerOwner:758262526915248128> Partnered', `\`${message.guild.partnered}\``, true)
      .addField('<a:z_blackcheck:758215462860881950> Verified', `\`${message.guild.verified}\``, true)
      .addField(':calendar_spiral: Created On', `\`${moment(message.guild.createdAt).format('MMM DD YYYY')}\``, true)
      .addField('Server Stats', `\`\`\`asciidoc\n${serverStats}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    if (message.guild.description) embed.setDescription(message.guild.description);
    if (message.guild.bannerURL) embed.setImage(message.guild.bannerURL({ dynamic: true }));
    message.channel.send(embed);
    }
});
         client.on('message', async message => {
  if (message.content.startsWith('+ui')) {
const moment = require('moment');
const statuses = {
  online: `<:Online:757607672093737121> \`Online\``,
  idle: `<:Idle:758258937903448065> \`AFK/Idle\``,
  offline: `<:Offline:757607738925776899> \`Offline\``,
  dnd: `<:DoNotDisturb:758258980765827073> \`Do Not Disturb\``
};
const flags = {
  DISCORD_EMPLOYEE: `<:DiscordStaff:758262218235183115> \`Discord Employee\``,
  DISCORD_PARTNER: `<:PartneredServerOwner:758262526915248128> \`Partnered Server Owner\``,
  BUGHUNTER_LEVEL_1: `<:DiscordBugHunterLevel1:758263575616946187> \`Bug Hunter (Level 1)\``,
  BUGHUNTER_LEVEL_2: `<:DiscordBugHunterLevel2:758265121704902687> \`Bug Hunter (Level 2)\``,
  HYPESQUAD_EVENTS: `<:DiscordHypeSquad:758263004244082699> \`HypeSquad Events\``,
  HOUSE_BRAVERY: `<:HypeSquadBravery:758255619642884099> \`House of Bravery\``,
  HOUSE_BRILLIANCE: `<:HypeSquadBrilliance:758255706259980298> \`House of Brilliance\``,
  HOUSE_BALANCE: `<:HypeSquadBalance:758255430086164532> \`House of Balance\``,
  EARLY_SUPPORTER: `<:DiscordEarlySupporter:758265307423965184> \`Early Supporter\``,
  TEAM_USER: 'Team User',
  SYSTEM: 'System',
  VERIFIED_BOT: `<:VerifiedBot:758271163855273984> \`Verified Bot\``,
  VERIFIED_DEVELOPER: `<:EarlyVerifiedBotDeveloper:757607406636367955> \`Early Verified Bot Developer\``
};
const args = message.content.slice(4).trim().split(/ +/g);
 const member =  message.mentions.members.first()  || message.member;
 if (!member) 
      return message.channel.send('Please mention the user for the userinfo..');
    const userFlags = (await member.user.fetchFlags()).toArray();
    const activities = [];
    let customStatus;
    for (const activity of member.presence.activities.values()) {
      switch (activity.type) {
        case 'PLAYING':
          activities.push(`Playing **${activity.name}**`);
          break;
        case 'LISTENING':
          if (member.user.bot) activities.push(`Listening to **${activity.name}**`);
          else activities.push(`Listening to **${activity.details}** by **${activity.state}**`);
          break;
        case 'WATCHING':
          activities.push(`Watching **${activity.name}**`);
          break;
        case 'STREAMING':
          activities.push(`Streaming **${activity.name}**`);
          break;
        case 'CUSTOM_STATUS':
          customStatus = activity.state;
          break;
      }
    }
    /**
   * Gets member from mention
   * @param {Message} message 
   * @param {string} mention 
   */
 
    const embed = new MessageEmbed()
      .setTitle(`${member.displayName}'s Information`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .addField('User', member, true)
      .addField('Discriminator', `\`#${member.user.discriminator}\``, true)
      .addField('ID', `\`${member.id}\``, true)
      .addField('Status', statuses[member.presence.status], true)
      .addField('Bot', `\`${member.user.bot}\``, true)
      .addField('Color Role', member.roles.color || '`None`', true)
      .addField('Highest Role', member.roles.highest, true)
      .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
      .addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(member.displayHexColor);
    if (activities.length > 0) embed.setDescription(activities.join('\n'));
    if (customStatus) embed.spliceFields(0, 0, { name: 'Custom Status', value: customStatus});
    if (userFlags.length > 0) embed.addField('Badges', userFlags.map(flag => flags[flag]).join('\n'));
    message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('+userinfo')) {
const moment = require('moment');
const statuses = {
  online: `<:Online:757607672093737121> \`Online\``,
  idle: `<:Idle:758258937903448065> \`AFK/Idle\``,
  offline: `<:Offline:757607738925776899> \`Offline\``,
  dnd: `<:DoNotDisturb:758258980765827073> \`Do Not Disturb\``
};
const flags = {
  DISCORD_EMPLOYEE: `<:DiscordStaff:758262218235183115> \`Discord Employee\``,
  DISCORD_PARTNER: `<:PartneredServerOwner:758262526915248128> \`Partnered Server Owner\``,
  BUGHUNTER_LEVEL_1: `<:DiscordBugHunterLevel1:758263575616946187> \`Bug Hunter (Level 1)\``,
  BUGHUNTER_LEVEL_2: `<:DiscordBugHunterLevel2:758265121704902687> \`Bug Hunter (Level 2)\``,
  HYPESQUAD_EVENTS: `<:DiscordHypeSquad:758263004244082699> \`HypeSquad Events\``,
  HOUSE_BRAVERY: `<:HypeSquadBravery:758255619642884099> \`House of Bravery\``,
  HOUSE_BRILLIANCE: `<:HypeSquadBrilliance:758255706259980298> \`House of Brilliance\``,
  HOUSE_BALANCE: `<:HypeSquadBalance:758255430086164532> \`House of Balance\``,
  EARLY_SUPPORTER: `<:DiscordEarlySupporter:758265307423965184> \`Early Supporter\``,
  TEAM_USER: 'Team User',
  SYSTEM: 'System',
  VERIFIED_BOT: `<:VerifiedBot:758271163855273984> \`Verified Bot\``,
  VERIFIED_DEVELOPER: `<:EarlyVerifiedBotDeveloper:757607406636367955> \`Early Verified Bot Developer\``
};
const args = message.content.slice(4).trim().split(/ +/g);
 const member =  message.mentions.members.first()  || message.member;
 if (!member) 
      return message.channel.send('Please mention the user for the userinfo..');
    const userFlags = (await member.user.fetchFlags()).toArray();
    const activities = [];
    let customStatus;
    for (const activity of member.presence.activities.values()) {
      switch (activity.type) {
        case 'PLAYING':
          activities.push(`Playing **${activity.name}**`);
          break;
        case 'LISTENING':
          if (member.user.bot) activities.push(`Listening to **${activity.name}**`);
          else activities.push(`Listening to **${activity.details}** by **${activity.state}**`);
          break;
        case 'WATCHING':
          activities.push(`Watching **${activity.name}**`);
          break;
        case 'STREAMING':
          activities.push(`Streaming **${activity.name}**`);
          break;
        case 'CUSTOM_STATUS':
          customStatus = activity.state;
          break;
      }
    }
    /**
   * Gets member from mention
   * @param {Message} message 
   * @param {string} mention 
   */
 
    const embed = new MessageEmbed()
      .setTitle(`${member.displayName}'s Information`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .addField('User', member, true)
      .addField('Discriminator', `\`#${member.user.discriminator}\``, true)
      .addField('ID', `\`${member.id}\``, true)
      .addField('Status', statuses[member.presence.status], true)
      .addField('Bot', `\`${member.user.bot}\``, true)
      .addField('Color Role', member.roles.color || '`None`', true)
      .addField('Highest Role', member.roles.highest, true)
      .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
      .addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(member.displayHexColor);
    if (activities.length > 0) embed.setDescription(activities.join('\n'));
    if (customStatus) embed.spliceFields(0, 0, { name: 'Custom Status', value: customStatus});
    if (userFlags.length > 0) embed.addField('Badges', userFlags.map(flag => flags[flag]).join('\n'));
    message.channel.send(embed);
  }
});
client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().startsWith("+serverinfo")) {
    // Get roles count
const region = {
  'us-central': ':flag_us:  `US Central`',
  'us-east': ':flag_us:  `US East`',
  'us-south': ':flag_us:  `US South`',
  'us-west': ':flag_us:  `US West`',
  'europe': ':flag_eu:  `Europe`',
  'singapore': ':flag_sg:  `Singapore`',
  'japan': ':flag_jp:  `Japan`',
  'russia': ':flag_ru:  `Russia`',
  'hongkong': ':flag_hk:  `Hong Kong`',
  'brazil': ':flag_br:  `Brazil`',
  'sydney': ':flag_au:  `Sydney`',
  'southafrica': '`South Africa` :flag_za:'
};
const moment = require('moment');
const verificationLevels = {
  NONE: '`None`',
  LOW: '`Low`',
  MEDIUM: '`Medium`',
  HIGH: '`High`',
  VERY_HIGH: '`Highest`'
};
const notifications = {
  ALL: '`All`',
  MENTIONS: '`Mentions`'
};

    const roleCount = message.guild.roles.cache.size - 1; // Don't count @everyone
    
    // Get member stats
    const members = message.guild.members.cache.array();
    const memberCount = members.length;
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
    const bots = members.filter(b => b.user.bot).length;
    
    // Get channel stats
    const channels = message.guild.channels.cache.array();
    const channelCount = channels.length;
    const textChannels = 
      channels.filter(c => c.type === 'text' && c.viewable).sort((a, b) => a.rawPosition - b.rawPosition);
    const voiceChannels = channels.filter(c => c.type === 'voice').length;
    const newsChannels = channels.filter(c => c.type === 'news').length;
    const categoryChannels = channels.filter(c => c.type === 'category').length;
    
    const serverStats = stripIndent`
      Members  :: [ ${memberCount} ]
               :: ${online} Online
               :: ${dnd} Busy
               :: ${afk} AFK/Idle
               :: ${offline} Offline
               :: ${bots} Bots
      Channels :: [ ${channelCount} ]
               :: ${textChannels.length} Text
               :: ${voiceChannels} Voice
               :: ${newsChannels} Announcement
               :: ${categoryChannels} Category
      Roles    :: [ ${roleCount} ]
    `;

    const embed = new MessageEmbed()
      .setTitle(`${message.guild.name}'s Information`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField('ID', `\`${message.guild.id}\``, true)
      .addField('Region', region[message.guild.region], true)
      .addField(`<:Owner:758290691985113119> Owner`, message.guild.owner, true)
      .addField('<a:Verified:751425803778261043> Verification Level', verificationLevels[message.guild.verificationLevel], true)
      .addField('<:p_pepeRules:758292973393018922> Rules Channel', 
        (message.guild.rulesChannel) ? `${message.guild.rulesChannel}` : '`None`', true
      )
      .addField('<a:ranbooster:758291290348584970> System Channel', 
        (message.guild.systemChannel) ? `${message.guild.systemChannel}` : '`None`', true
      )
      .addField('<:Idle:758258937903448065> AFK Channel', 
        (message.guild.afkChannel) ? `${message.guild.afkChannel.name}` : '`None`', true
      )
      .addField('<:Idle:758258937903448065> AFK Timeout', 
        (message.guild.afkChannel) ? 
          `\`${moment.duration(message.guild.afkTimeout * 1000).asMinutes()} minutes\`` : '`None`', 
        true
      )
      .addField('<a:announcement:758288397579845652> Default Notifications', notifications[message.guild.defaultMessageNotifications], true)
      .addField('<:PartneredServerOwner:758262526915248128> Partnered', `\`${message.guild.partnered}\``, true)
      .addField('<a:z_blackcheck:758215462860881950> Verified', `\`${message.guild.verified}\``, true)
      .addField(':calendar_spiral: Created On', `\`${moment(message.guild.createdAt).format('MMM DD YYYY')}\``, true)
      .addField('Server Stats', `\`\`\`asciidoc\n${serverStats}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    if (message.guild.description) embed.setDescription(message.guild.description);
    if (message.guild.bannerURL) embed.setImage(message.guild.bannerURL({ dynamic: true }));
    message.channel.send(embed);
    }
});
const { stripIndents } = require("common-tags");
const urban = require('urban');
client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().startsWith("+urban")) {
 const args = message.content.slice(7).trim().split(/ +/g);    
 if(!args[0]) return message.channel.send('Enter a word to search for.');
      
    //image of an urban dictionary logo to use in the embed
    const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxeXc6CDMTuda_avVhbE95cPJ2QMoKLxNbHR5pvyUoB0a_y-fl';
  
    //join all of the arguments together separate by spaces
    let msg = args.slice(0).join(' ');

    //set the search term
    let search = urban(msg);
    
    //attempt to get the first result
    try{
      search.first(result => {
        //if there is no result return a message to the channel
        if(!result) return message.channel.send('No results found!');

        //get info from the result
        let { word, definition, example, thumbs_up, thumbs_down, permalink, author } = result;

        //create a new embed with the info and send it to the channel
        let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(`Urban Dictionary | ${word}`, img)
          .setThumbnail(img)
          //set the definition, example, upvote, downvote to a default value if any of the information doesn't exist
          .setDescription(stripIndents`**Definition** ${definition || 'No definition'}
          **Example:** ${example || 'No example'}
          **Upvote:** ${thumbs_up || 0}
          **Downvote:** ${thumbs_down || 0}
          **Link:** [link to ${word}](${permalink || 'https://www.urbandictionary.com/'})`) //hyper link syntax for embeds
          .setTimestamp()
          .setFooter(`Written by ${author || 'Unknown'}`);
        
        message.channel.send(embed);
      });
    } catch(e){
      console.log(e); //log the error to the console
    
      //return a message to the channel if an error was encountered
      return message.channel.send('Error. Try again!');
      }
  }
})
var figlet = require('figlet');
client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().startsWith("+ascii")) {
   const args = message.content.slice(7).trim().split(/ +/g);
   if(!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            message.channel.send('```' + data + '```')
        })}
    })

    const math = require('mathjs');
client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().startsWith("+math")) {
      const args = message.content.slice(6).trim().split(/ +/g); 
if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);
    }
});
client.login(process.env.TOKEN);
