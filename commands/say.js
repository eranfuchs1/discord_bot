const exec = require("child_process");
const { stdout, stderr } = require("process");
const { Readable } = require("stream").Readable;


module.exports = {
    name: 'say',
    description: 'make this bot speak!',
    execute(message,args){
        var text = '';
        function say(connection, message){
            var cleaned = text.replace(/[\;\!\|\&\'\"]/g,' ');
            const readable = new Readable();
            readable._read = () => {};
            readable.on('data', (chunk) => {
            });
            readable.on('end', () => {
            });
            readable.on('error', (err) => {
                console.log(err);
            });
            var data = exec.execSync(`espeak '${cleaned}' --stdout`);
            readable.push(data);
            readable.push(null);
            dispatcher = connection.play(readable);
            dispatcher.on("end", end => {
                connection.disconnect();
            });
        }
        for(var i = 0; i < args.length; i++)
        {
            text += args[i] + ' ';
        }
        if (!message.member.voice.channel) return message.channel.send("You must be in the voice channel to use this command!");
        if (!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
            say(connection, message);
        })
    }
}