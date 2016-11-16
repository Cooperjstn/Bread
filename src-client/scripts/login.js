const React = require('react')
const Backbone = require('backbone')

const LoginView = React.createClass({

render: function() {
  return (
      <div>
         <form className="form-group grid-container">
            <div className="auth-header-container">
               <h1 className="auth-header">Bread</h1>
            </div>

            <div className="row auth-container-row">
               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Username</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field pass-container col-sm-12 col-md-12">
                  <h2 className="pass-label"><label>Password </label></h2>
                  <input className="auth-inputs" type="password" name="password"/>
               </div>

               <div className="form-field btn-container col-sm-12 col-md-12">
                  <input type="submit" className="btn primary auth-button" value="+" />
               </div>
            </div>
         </form>
       </div>
     )
   }
})

module.exports = LoginView
