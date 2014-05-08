var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    }),
    new (winston.transports.File)({
      filename: __dirname + '/logs/main.log',
      maxsize: 10485760,
    })
  ],
  exceptionHandlers: [
    new (winston.transports.File)({
      filename: __dirname + '/logs/errors.log',
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
