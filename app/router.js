define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index",
      "matrix" : "matrix"
    },

    index: function() {
      console.log("Welcome to your / route.");
    },

    matrix : function(){
      console.log("sap");
    }
  });
});
