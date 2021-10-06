module.exports = {
    name: 'todo',
    description: 'todo list!',
    execute(message,args){
        const fs = require('fs');
        var list = JSON.parse(fs.readFileSync('./data/todo_list.json'));
        if (args.length > 0)
        {
            if (args[0] === 'add')
            {
                output = '';
                for (const iterator of args.slice(2)) {
                    output += iterator + ' ';
                }
                list[args[1]] = output;
                fs.writeFileSync('./data/todo_list.json',JSON.stringify(list));
            }
            else if (args[0] === 'list')
            {
                for (var key in list)
                {
                    if(list.hasOwnProperty(key))
                    {
                        message.channel.send("todo_" + key + ": " + list[key]);
                    }
                }
            }
        }
    }
}