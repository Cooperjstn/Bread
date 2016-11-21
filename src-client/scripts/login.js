const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const LoginView = React.createClass({

_handleUserAuth: function(evt){
   evt.preventDefault()
   console.log(this);


 let newUserData = {
      username: this.refs.username.value,
      password: this.refs.password.value
   }
   console.log(newUserData)
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

               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Username</label></h2>
                  <input className="auth-inputs" ref={'username'} type="text" name="name"/>
               </div>

               <div className="form-field pass-container col-sm-12 col-md-12">
                  <h2 className="pass-label"><label>Password </label></h2>
                  <input className="auth-inputs" ref={'password'} type="password" name="password"/>
               </div>

               <div className="form-field btn-container col-sm-12 col-md-12">
                  <input type="submit" className="btn btn-default" value="Log in" />
               </div>
            </form>
         </div>
     )
   }
})

module.exports = LoginView
