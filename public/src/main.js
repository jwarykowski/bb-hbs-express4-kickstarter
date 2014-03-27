'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'Bootstrap'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: '../vendor/jquery/jquery.min',
    backbone: '../vendor/backbone/backbone-min',
    underscore: '../vendor/underscore/underscore-min',
    bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min',
    handlebars: '../vendor/handlebars/handlebars',
    text:  '../vendor/requirejs-text/text'
  }
});

require([
  'backbone',
  'routers/router'
], function (Backbone, AppRouter) {
  new AppRouter();
  Backbone.history.start({ pushState: true});
});
