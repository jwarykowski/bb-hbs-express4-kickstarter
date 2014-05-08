'use strict';

// add newrelic key
// require('newrelic');

// env configuration
var port = process.env.PORT || 3000;

// modules
var express         = require('express'),
    exphbs          = require('express3-handlebars'),
    compress        = require('compression'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    logger          = require('./logger'),
    app             = express();

// port / handlebars engine
app.set('port', port);
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// middleware
app.use(compress());
app.use(bodyParser());
app.use(methodOverride());
app.use(require('winston-request-logger').create(logger));
app.use(express.static(__dirname + '/public'));

// make her listen
app.listen(port);

module.exports.app = app;
require('./routes');
