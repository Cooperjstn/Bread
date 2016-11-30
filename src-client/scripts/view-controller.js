const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions')
const OopsView = require('./404.js')
const LoginView = require('./login.js')
const PaymentsView = require ('./payments.js')
const SavingsView = require ('./savings.js')
const DashboardView = require ('./dashboard.js')
const CreateView = require('./create.js')


const AppViewController = React.createClass({

   getInitialState: function(){

      let updatedState = STORE.getStoreData()
      console.log("retrieved data", updatedState.userStatements)
      // return STORE.setStore()
      return updatedState
   },

   componentDidMount: function(){
      let self = this
      ACTIONS.fetchUserStatements()

      STORE.onChange(function(){

         let updatedState = STORE.getStoreData()
         console.log("retrieved data", updatedState.userStatements)
         self.setState(updatedState)
      })
   },

  render: function(){
   switch(this.props.routedFrom){

         case "DashboardView":
            return <DashboardView statements = {this.state.userStatements}/>
            break;

         case "LoginView":
            return <LoginView/>
            break;

        case "CreateView":
            return <CreateView/>
            break;

        case "SavingsView":
            return <SavingsView statements = {this.state.userStatements}/>
            break;

         case "PaymentsView":
            return <PaymentsView/>
            break;

         case "OopsView":
            return <OopsView/>
            break;
      }
   }

})

module.exports = AppViewController
