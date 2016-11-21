const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions')

const LoginView = require('./login.js')
<<<<<<< HEAD
const PaymentsView = require('./payments.js')
=======
const CreateView = require('./create.js')
>>>>>>> 250e0a5c96f96b4be17b8eec1f60cb7333685f01

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
         case "PaymentsView":
            return <PaymentsView/>
            break;
         }
 }

})

module.exports = AppViewController
