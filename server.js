'use strict';

// modules
var express   = require('express'),
    exphbs    = require('express3-handlebars'),
    http      = require('http'),
    path      = require('path');

var app = express();

// routes
require('./routes')(app);

// port handlebars engine
app.set('port', process.env.PORT || 3000);
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

// middleware
app.use(express.logger());
app.use(express.compress());
app.use(express.methodOverride());
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
