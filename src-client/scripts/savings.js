const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const SavingsView = React.createClass({
  _submitForm: function(evt){
    evt.preventDefault()

    let formData = {
      savingsAcct: this.refs.savingsAcct.value,
      moneyMarket: this.refs.moneyMarket.value,
      mutualFund: this.refs.mutualFund.value
    }
    ACTIONS.createNewSavings(formData)
    console.log('formData', formData);


  },


  render: function (){
    return (
      <div className = "savings-field">
        <h1 className = "sav-h1"> Saving Options </h1>
          <form className = "sav-form">
          <p>Savings Account:</p>

          <input className="sav-text" name="savings-acct" ref={ 'savingsAcct' }></input>
          <p>Money Market:</p>

          <input className="sav-text" name="money-market" ref={ 'moneyMarket' }></input>
          <p>Mutual Fund:</p>

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
