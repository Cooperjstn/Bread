const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const SavingsView = React.createClass({
  _submitForm: function(evt){
    evt.preventDefault()

    let formData = {
      id: this.refs.savingsAcct.dataset.id,
      savingsAcct: Number(this.refs.savingsAcct.value),
      moneyMarket: Number(this.refs.moneyMarket.value),
      mutualFund: Number(this.refs.mutualFund.value)
    }
    ACTIONS.createNewSavings(formData)
    console.log('formData', formData);

    let errorHandler = function(){
      if(formData < 0){
         return (<h1 className="error-msg"> Woah! Something is a little fishy with the math here</h1>)
      } else if (savingsAcct && moneyMarket && mutualFund === 0){
         return (<h1 className="error-msg"> You didn't put your dough in the oven!</h1>)

      }
   }


},

  componentWillMount: function(){


      ACTIONS.fetchUserStatements()
   },


  render: function (){
     let prevModId = null;
     let self = this

     let moneyAfterPayments = this.props.statements.map(function(model, i){

        if(self.props.statements.length === 1) {
           return <h2 key={i} className="bg-success">{model.get('moneyAfterPayments')}</h2>
        } else if (prevModId === null) {
           prevModId = model.get('id')
        } else if(model.get('id') > prevModId ) {
           prevModId = model.get('id')
        }

        if(self.props.statements.length -1 === i) {
           let modelWithHighestId = self.props.statements.filter(function(mod){
             return mod.get('id') === prevModId
          })

           return <h2 key={i} className="bg-success">{modelWithHighestId[0].get('moneyAfterPayments')}</h2>
        }

     })

    return (
      <div className = "savings-field">
        <h1 className = "sav-h1"> Available Money After Bills </h1>
            { moneyAfterPayments }
         <form className = "sav-form">
            <p>Savings Account:</p>

            <p className="money-saved"></p>

            <input className="sav-text" name="savings-acct" ref={ 'savingsAcct' } data-id={prevModId}></input>
            <p className="money-saved">Money Market:</p>

            <input className="sav-text" name="money-market" ref={ 'moneyMarket' }></input>
            <p className="money-saved">Mutual Fund:</p>

            <input className="sav-text" name="mutual-fund" ref={ 'mutualFund' }></input>
            <br></br>
            <div>
            <button className='button create-btn' onClick={this._submitForm}>Submit</button>
          </div>
         </form>
        </div>
      )}
}
)

module.exports = SavingsView
