const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const AppViewController = require('./view-controller.js')

const AppRouter = Backbone.Router.extend({

   routes: {
      "payments-page": "showPayments",
      "": "showLoginPage"
   },
   // FRAME FOR PAYMENTS ROUTE
   showPayments: function(){
      ReactDOM.render(<AppViewController routedFrom="PaymentsView"/>, document.querySelector('#app-container'))
   },

   showLoginPage: function(){
      ReactDOM.render(<AppViewController routedFrom="LoginView"/>, document.querySelector('#app-container'))
   },

   initialize: function(){
      Backbone.history.start()
   }
})



new AppRouter()
