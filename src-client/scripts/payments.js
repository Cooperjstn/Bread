const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')

const PaymentsView = React.createClass({
   render: function() {
      return (
         
            <div className="row auth-container-row">
               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Username</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Username</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Username</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Username</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>
            </div>

      )
   }
})

module.exports = PaymentsView
