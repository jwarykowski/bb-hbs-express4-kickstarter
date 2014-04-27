var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      colorize: true
    }),
    new (winston.transports.File)({
      filename: __dirname + '/logs/main.log',
      json: true,
      colorize: false,
      maxsize: 10485760
    })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({
      timestamp: true,
      colorize: true
    }),
    new (winston.transports.File)({
      filename: __dirname + '/logs/errors.log',
      json: true,
      colorize: false,
      maxsize: 10485760
    })
  ],
  exitOnError: false
});

// add custom colours
winston.addColors({
  trace: 'white',
  debug: 'green',
  info: 'green',
  warn: 'yellow',
  crit: 'red',
  fatal: 'red'
});

module.exports = logger;
