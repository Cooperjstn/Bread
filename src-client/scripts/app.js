const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const AppViewController = require('./view-controller.js')
const LoginView = require('./login.js')
const UserModel = require('./model-user.js')

const CreateView = require('./create.js')
const PaymentsView = require('./payments.js')
const SavingsView = require ('./savings.js')
// const SavingsView = require('./savings.js')


const AppRouter = Backbone.Router.extend({
  routes: {
    "savings": "showSavingsPage",
    "create" : "showCreatePage",
    "payments-page": "showPayments",
      "" : 'showLoginPage'
    },

  showSavingsPage: function(){
    ReactDOM.render(<AppViewController routedFrom="SavingsView"/>, document.querySelector('#app-container'))
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
