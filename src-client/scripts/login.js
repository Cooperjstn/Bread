const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const LoginView = React.createClass({

_handleUserAuth: function(evt){
   evt.preventDefault()

 let newUserData = {
      username: evt.target.username.value,
      password: evt.target.password.value
   }

   ACTIONS.authenticateUser(newUserData)
},

render: function() {
  return (
      <div className = "login-container">
         <form className="form-group grid-container" onSubmit={this._handleUserAuth}>
            <div className="auth-header-container">
               <h1 className="auth-header">Bread</h1>
               <hr/>
            </div>

            <div className="row auth-container-row">
               <div className="form-field user-container col-sm-12 col-md-12">
                  <h4 className="user-label"><label>Username</label></h4>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field pass-container col-sm-12 col-md-12">
                  <h4 className="pass-label"><label>Password </label></h4>
                  <input className="auth-inputs" type="password" name="password"/>
               </div>

               <div className="form-field btn-container col-sm-12 col-md-12">
                  <input type="submit" className="btn primary auth-button" value="Log in" />
               </div>
            </div>
         </form>
       </div>
     )
   }
})

module.exports = LoginView
