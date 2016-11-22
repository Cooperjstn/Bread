const Backbone = require('backbone')

const PaymentModel = Backbone.Model.extend({
   url: "/payments",

   initialize: function(){

   }
})


module.exports = PaymentModel
