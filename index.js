const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const logging = require('./lib/logging.js');
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
music_vars = require('./lib/music_vars.js');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('message', message =>{
    logging.log_helper(`message`,[message]);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command == 'help')
    {
        var help_str = '';
        for (var key of client.commands.keys())
        {
            help_str += `${key}: ${client.commands.get(key).description}\n`;
        }
        message.channel.send(help_str);
    }
    for (var key of client.commands.keys())
    {
        if (command == key)
        {
            client.commands.get(key).execute(message, args);
        }
    }
});


client.on("messageUpdate", function(oldMessage, newMessage){
    logging.log_helper(`messageUpdate`, [oldMessage, newMessage]);
});

client.on("channelUpdate", function(oldChannel, newChannel){
    logging.log_helper(`channelUpdate`, [oldChannel, newChannel]);
});

client.on("channelCreate", function(channel){
    logging.log_helper(`channelCreate`, [channel]);
});

client.on("channelDelete", function(channel){
    logging.log_helper(`channelDelete`, [channel]);
});

client.on("debug", function(info){
    logging.log_helper(`debug`, [info]);
});


client.on("clientUserGuildSettingsUpdate", function(clientUserGuildSettings){
    logging.log_helper(`clientUserGuildSettingsUpdate`, [clientUserGuildSettings]);
});

client.on("clientUserSettingsUpdate", function(clientUserSettings){
    logging.log_helper(`clientUserSettingsUpdate`, [clientUserSettings]);
});

client.on("disconnect", function(event){
    logging.log_helper(`disconnect`, [event]);
});

client.on("emojiCreate", function(emoji){
    logging.log_helper(`emojiCreate`, [emoji]);
});

client.on("emojiDelete", function(emoji){
    logging.log_helper(`emojiDelete`, [emoji]);
});

client.on("emojiUpdate", function(oldEmoji, newEmoji){
    logging.log_helper(`emojiUpdate`, [oldEmoji, newEmoji]);
});

client.on("error", function(error){
    logging.log_helper(`error`, [error]);
});

client.on("guildBanAdd", function(guild, user){
    logging.log_helper(`guildBanAdd`, [guild, user]);
});

client.on("guildBanRemove", function(guild, user){
    logging.log_helper(`guildBanRemove`, [guild, user]);
});

client.on("guildCreate", function(guild){
    logging.log_helper(`guildCreate`, [guild]);
});

client.on("guildDelete", function(guild){
    logging.log_helper(`guildDelete`, [guild]);
});

client.on("guildMemberAdd", function(member){
    logging.log_helper(`guildMemberAdd`, [member]);
});

client.on("guildMemberAvailable", function(member){
    logging.log_helper(`guildMemberAvailable`, [member]);
});

client.on("guildMemberRemove", function(member){
    logging.log_helper(`guildMemberRemove`, [member]);
});

client.on("guildMembersChunk", function(members, guild){
    logging.log_helper(`guildMembersChunk`, [members, guild]);
});

client.on("guildMemberSpeaking", function(member, speaking){
    logging.log_helper(`guildMemberSpeaking`, [member, speaking]);
});

client.on("guildMemberUpdate", function(oldMember, newMember){
    logging.log_helper(`guildMemberUpdate`, [oldMember, newMember]);
});

client.on("guildUnavailable", function(guild){
    logging.log_helper(`guildUnavailable`, [guild]);
});

client.on("guildUpdate", function(oldGuild, newGuild){
    logging.log_helper(`guildUpdate`, [oldGuild, newGuild]);
});

client.on("messageDelete", function(message){
    logging.log_helper(`messageDelete`, [message]);
});

client.on("messageDeleteBulk", function(messages){
    logging.log_helper(`messageDeleteBulk`, [messages]);
});

client.on("messageReactionAdd", function(messageReaction, user){
    logging.log_helper(`messageReactionAdd`, [messageReaction, user]);
});

client.on("messageReactionRemove", function(messageReaction, user){
    logging.log_helper(`messageReactionRemove`, [messageReaction, user]);
});

client.on("messageReactionRemoveAll", function(message){
    logging.log_helper(`messageReactionRemoveAll`, [message]);
});

client.on("presenceUpdate", function(oldMember, newMember){
    logging.log_helper(`presenceUpdate`, [oldMember, newMember]);
});


function msg_user (user) {
    rl.question(`message to ${user.tag}:`, function (msg) {
        user.send(msg);
        msg_user(user);
    })
}

client.on("ready", function(){
    logging.log_helper(`ready`, [client]);
    /*const member_id = "340106331501625344";
    client.users.fetch(member_id).then((user) => {
        msg_user(user);
    });*/
    /*logging.log_helper(`ready`,[`the client becomes ready to start`]);
    logging.log_helper(`ready`,[`I am ready! Logged in as ${client.user.tag}!`]);
    logging.log_helper(`ready`,[`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`]);*/
    /*client.user.setActivity("the upright organ");
    client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
    .then(link => {
        console.log(`Generated bot invite link: ${link}`);
        inviteLink = link;
    });*/
});

client.on("reconnecting", function(){
    logging.log_helper(`reconnecting`,[`client tries to reconnect to the WebSocket`]);
});

client.on("resume", function(replayed){
    logging.log_helper(`resume`, [replayed]);
});

client.on("roleCreate", function(role){
    logging.log_helper(`roleCreate`, [role]);
});

client.on("roleDelete", function(role){
    logging.log_helper(`roleDelete`, [role]);
});

client.on("roleUpdate", function(oldRole, newRole){
    logging.log_helper(`roleUpdate`, [oldRole, newRole]);
});

client.on("typingStart", function(channel, user){
    logging.log_helper(`typingStart`, [channel, user]);
});

client.on("typingStop", function(channel, user){
    logging.log_helper(`typingStop`, [channel, user]);
});

client.on("userNoteUpdate", function(user, oldNote, newNote){
    logging.log_helper(`userNoteUpdate`, [user, oldNote, newNote]);
});

client.on("userUpdate", function(oldUser, newUser){
    logging.log_helper(`userUpdate`, [oldUser, newUser]);
});

client.on("voiceStateUpdate", function(oldMember, newMember){
    logging.log_helper(`voiceStateUpdate`, [oldMember, newMember]);
});

client.on("warn", function(info){
    logging.log_helper(`warn`, [info]);
});



const login = require('./login.js');
login.login(client);
