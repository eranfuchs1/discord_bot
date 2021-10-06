module.exports = {
    name: 'end',
    description: 'end all ongoing music!',
    execute(message,args){
        var server = music_vars.variables.servers[message.guild.id];
        if(message.member.voice.channel){
            for(var i = server.queue.length - 1; i >= 0; i--)
            {
                server.queue.splice(i,1);
            }
            server.dispatcher.end();
            console.log("stopped the queue");
        }
        if(message.guild.connection) message.member.voice.connection.disconnect();
    }
}