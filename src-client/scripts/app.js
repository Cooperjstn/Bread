const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const AppViewController = require('./view-controller.js')
const LoginView = require('./login.js')
const CreateView = require('./create.js')
// const SavingsView = require('./savings.js')

const AppRouter = Backbone.Router.extend({
  routes: {
    // "savings": "showSavingsPage",
    "create" : "showCreatePage",
      "" : 'showLoginPage'
    },
   showCreatePage: function(){
    ReactDOM.render(<AppViewController routedFrom="CreateView"/>, document.querySelector('#app-container'))
   },

   showLoginPage: function(){
     ReactDOM.render(<AppViewController routedFrom="LoginView"/>, document.querySelector('#app-container'))
   },

   initialize: function(){
      Backbone.history.start()
   }
})



new AppRouter()
