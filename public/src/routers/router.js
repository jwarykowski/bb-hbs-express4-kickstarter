define([
  'jquery',
  'backbone'
], function($, Backbone) {
  'use strict';

  var AppRouter = Backbone.Router.extend({

    routes: {
      '': 'index'
    },

    initialize: function() {
      console.log('Router Initialised!');
    },

    index: function() {
      console.log('Index function called!');
    },
  });

  return AppRouter;
});
