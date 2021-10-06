const exec = require("child_process");
const { error } = require("console");
const { stdout, stderr } = require("process");
var fs = require("fs");

module.exports = {
    name: 'btc_usd',
    description: 'shows current btc to usd rate!',
    execute(message,args){
        var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
        var btc_usd_json = '';
        btc_usd_json = exec.execSync('curl ' + url);
        var btc_usd = JSON.parse(btc_usd_json);
        console.log(btc_usd["bpi"]["USD"]["rate"]);
        message.channel.send(`BTC to USD    ${btc_usd["bpi"]["USD"]["rate"]}$`);
    }
}