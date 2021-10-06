module.exports = {
    name: 'bsimracing',
    description: 'rss',
    execute(message,args){
        let Parser = require('rss-parser');
        let parser = new Parser();
        (async()=>{
            let feed = await parser.parseURL("https://www.bsimracing.com/feed");
            message.channel.send(feed.title);
            feed.items.forEach( item => {
                message.channel.send(item.title + ':' + item.link);
            })
        })();
    }
}