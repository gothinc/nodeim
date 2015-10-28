var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: "console",
            category: "console"
        },
        {
            type: "dateFile",
            filename : "/home/90ping/log/im/access",
            maxLogSize: 10240000,
            category: "access",
            absolute: true,
            pattern: ".yyyyMMdd.log",
            alwaysIncludePattern: true
        },
        {
            type: "dateFile",
            filename : "/home/90ping/log/im/error",
            maxLogSize: 10240000,
            category: "error",
            absolute: true,
            pattern: ".yyyyMMdd.log",
            alwaysIncludePattern: true
        }
    ],
    replaceConsole: true,
    levels: { 
        "access": "INFO",
        "error": "WARN"
    }
});

exports.alogger = log4js.getLogger('access');
exports.elogger = log4js.getLogger('error');
