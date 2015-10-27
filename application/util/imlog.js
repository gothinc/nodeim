var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: "console",
            category: "console"
        },
        {
            type: "dateFile",
            filename : "/home/90ping/log/im/",
            maxLogSize: 10240000,
            category: "record",
            absolute: true,
            pattern: "yyyyMMdd.log",
            alwaysIncludePattern: true
        }

    ],
    replaceConsole: true,
    levels: { "record": "INFO"}
});

module.exports = log4js.getLogger('record');
