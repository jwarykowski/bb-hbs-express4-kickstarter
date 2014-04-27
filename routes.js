var app = module.parent.exports.app;

// controllers
var webController   = require('./controllers/web');

// web requests
app.get('/', webController.index);
