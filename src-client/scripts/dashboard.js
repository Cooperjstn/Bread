const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions')
const {StatementModel, StatementCollection} = require('./model-statements.js')

const DashboardView = React.createClass({

componentWillMount: function(){

   //  ACTIONS.fetchUserStatements()
 },

 _routeToPayments: function(){
   window.location.hash = 'budget-statement/new'
},

 render: function(){
console.log("show me props",this.props);
let statementListings = this.props.statements.map(function(mod, i){

   return <Statement key={i} stmntData={mod}/>
})

   return(

         <div className="multi-container">
            <div className="btn-container col-sm-12 col-md-12">
               <button className="btn btn-default" onClick={this._routeToPayments}>New Budget</button>
            </div>
               <img className="dashlogo" src="../images/logo2.png" alt="image"></img>
               <h2 className="dash-sub-header">Watch That Dough Rise: </h2>
               <hr/>
               <div className="statements-container">
                  <div className="row">
                     {statementListings}
                  </div>
               <hr/>
            </div>
         </div>

      )
   }
})

let Statement = React.createClass({
   render: function(){
      return (
         <div className="col-xs-6 col-md-4" >
            <p className ="dash">Budget for: {this.props.stmntData.get('name')}</p>
            <p className ="dash">Goal: {this.props.stmntData.get('user').goal} </p>
            <p className ="dash">Money saved so far: $201.40 </p>

            <div className="btn-container col-sm-12 col-md-12">
               <input type="submit" className="new-btn" value="Toss this bread"/>
            </div>
         </div>
         )
      }
   })

module.exports = DashboardView





      //<a href={"./#payments-page/"+data.id} className="anchor-to-single"></a>
      // {data.attributes.goal}
      // {data.attributes.moneyAfterPayments}
