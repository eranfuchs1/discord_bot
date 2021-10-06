module.exports = {
    name: 'skip',
    description: 'skip the current song being played!',
    execute(message,args){
        var server = music_vars.variables.servers[message.guild.id];
        if(server.dispatcher) server.dispatcher.end();
    }
}