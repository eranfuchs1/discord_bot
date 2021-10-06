const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    description: 'play a song!',
    execute(message,args){
        function play(connection, message){
            var server = music_vars.variables.servers[message.guild.id];
            var sound = ytdl(server.queue[0], {filter: "audioonly"});
            console.log(sound);
            server.dispatcher = connection.play(sound);
            server.queue.shift();
            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    play(connection, message);
                }
                else{
                    connection.disconnect();
                }
            })
        }
        if (!args[0]) return message.channel.send("Please provide a link!");
        if (!message.member.voice.channel) return message.channel.send("You must be in the voice channel to use this command!");
        if (!music_vars.variables.servers[message.guild.id]) music_vars.variables.servers[message.guild.id] = {
            queue: []
        }
        var server = music_vars.variables.servers[message.guild.id];
        server.queue.push(args[0]);
        if (!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
            play(connection, message);
        })
    }
}