var fs = require('fs');

module.exports = {
    name: 'wiki',
    description: "use this channel's local wiki!",
    execute(message, args){
        if (args.length < 1)
        {
            message.channel.send("must provide an argument: [edit <item-name>][search <item-name>]");
            return;
        }
        if (args.length < 2 && (args[0] == 'edit' || args[0] == 'search'))
        {
            message.channel.send("must provide an item name!");
            return;
        }
        if (!(args[0] == 'edit' || args[0] == 'search'))
        {
            message.channel.send('first argument must be in the form: [edit][search]');
            return;
        }
        var wiki = JSON.parse(fs.readFileSync('./data/wiki.json'));
    }
}