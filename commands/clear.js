module.exports = {
    name: 'clear',
    description: 'clear x amount of messages! usage: clear [<number of messages>] [all]',
    async execute(message,args){
        if(args[0] == 'all')
        {
            await message.channel.messages.fetch().then(messages => {
                message.channel.bulkDelete(messages);
            })
            return;
        }
        if(!args[0]) return message.reply("Must specify amount of messages to clear!");
        if(isNaN(args[0])) return message.reply("Must be a number!");
        if(args[0] > 100) return message.reply("Must be less than or equal to 100!");
        if(args[0] < 1) return message.reply("Must be greater than 0!");
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}