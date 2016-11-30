const Backbone = require('backbone')


const StatementModel = Backbone.Model.extend({
   url: "/statements",

   initialize: function(){

   }
})

const StatementCollection = Backbone.Collection.extend({
   model: StatementModel,

   initialize: function(){

   }
})

module.exports = {StatementModel, StatementCollection}
