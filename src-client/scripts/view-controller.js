const React = require('react')
const LoginView = require('./login.js')

const AppViewController = React.createClass({
   render: function() {
      switch(this.props.routedFrom) {
         case "LoginView":
            return <LoginView/>
            break;
      }
   }
})

module.exports = AppViewController
