const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const AppViewController = require('./view-controller.js')
const LoginView = require('./login.js')
const UserModel = require('./model-user.js')

const CreateView = require('./create.js')
const PaymentsView = require('./payments.js')
const OopsView = require('./404.js')
// const SavingsView = require('./savings.js')


const AppRouter = Backbone.Router.extend({
  routes: {
     "404": "showOopsView",
    "savings": "showSavingsPage",
    "create" : "showCreatePage",
    "payments-page": "showPayments",
      "" : 'showLoginPage'
    },

   showOopsView: function(){
      ReactDOM.render(<AppViewController routedFrom="OopsView"/>, document.querySelector('#app-container'))
   },

   showCreatePage: function(){
      ReactDOM.render(<AppViewController routedFrom="CreateView"/>, document.querySelector('#app-container'))
  },

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
