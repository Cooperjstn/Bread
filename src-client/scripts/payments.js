const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')

const PaymentsView = React.createClass({
   render: function() {
      return (

            <div className="row auth-container-row">
               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Rent</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Utilities</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>More bills</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>

               <div className="form-field user-container col-sm-12 col-md-12">
                  <h2 className="user-label"><label>Even more bills</label></h2>
                  <input className="auth-inputs" type="text" name="name"/>
               </div>
            </div>

      )
   }
})

module.exports = PaymentsView
