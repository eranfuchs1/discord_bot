module.exports = {
    name: 'logging',
    description: 'helper functions for logging to stdout',
    log_helper(event_txt, obj_array)
    {
        const now = Date.now();
        const time_stamp = `[timeInt<${now}> timeStr<${new Date(now).toString()}>]        ${event_txt}`;
        /*if (obj_array.length == 1)
        {
            console.log(`${time_stamp}${JSON.stringify(obj_array[0])}`);
        }
        if(obj_array.length == 2)
        {
            console.log(`${time_stamp}${JSON.stringify(obj_array[0])} -> ${JSON.stringify(obj_array[2])}`);
        }
        else if (obj_array > 2)
        {*/
        var log_txt = `${time_stamp}[`;
        for (let index = 0; index < obj_array.length; index++) {
            const element = obj_array[index];
            log_txt += `${JSON.stringify(element)},`;
        }
        log_txt += `]`;
        const fs = require('fs');
        var sanitize = require("sanitize-filename");
        fs.appendFile(`./logs/${sanitize(event_txt)}.log`, `${log_txt}\n`, function (err) {
            if (err) throw err;
            console.log(`${event_txt}: event data appended.`);
        });
        console.log(log_txt);
        //}
    }
}