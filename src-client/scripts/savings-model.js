const Backbone = require('backbone')

const SaveModel = Backbone.Model.extend({
   url: "/savings",

   initialize: function(){

   }
})

module.exports = SaveModel
