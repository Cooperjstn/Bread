const Backbone = require('backbone')

const MoneyCollection = Backbone.Collection.extend({

  url: "/payments",

  initialize: function(){
     console.log(MoneyCollection)
  }

});

module.exports = MoneyCollection
