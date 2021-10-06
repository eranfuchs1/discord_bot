module.exports = {
    name: 'shalom',
    description: 'spammer command!',
    execute(message,args){
        var sleep = require('sleep');
        for (let index = 0; index < 20; index++) {
            message.channel.send(':b:');
            sleep.msleep(500);
        }
    }
}