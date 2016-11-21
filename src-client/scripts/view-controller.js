const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions')

const LoginView = require('./login.js')
const CreateView = require('./create.js')

const AppViewController = React.createClass({

  render: function(){
   switch(this.props.routedFrom){
         case "LoginView":
            return <LoginView/>
            break;

        case "CreateView":
            return <CreateView/>
            break;

        case "SavingsView":
            return <SavingsView/>
            break;
   }
 }



})

module.exports = AppViewController
