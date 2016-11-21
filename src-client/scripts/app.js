const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const AppViewController = require('./view-controller.js')
<<<<<<< HEAD
=======
const LoginView = require('./login.js')

const CreateView = require('./create.js')
const PaymentsView = require('./payments.js')
// const SavingsView = require('./savings.js')
>>>>>>> 250e0a5c96f96b4be17b8eec1f60cb7333685f01

const AppRouter = Backbone.Router.extend({
  routes: {
    // "savings": "showSavingsPage",
    "create" : "showCreatePage",
    "payments-page": "showPayments",
      "" : 'showLoginPage'
    },

   showCreatePage: function(){
    ReactDOM.render(<AppViewController routedFrom="CreateView"/>, document.querySelector('#app-container'))
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
