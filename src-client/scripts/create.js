const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const CreateView = React.createClass({

     _handleLogin: function(evt){



        evt.preventDefault()

        let newUserData = {
           username: this.refs.username.value,
           password: this.refs.password.value,
           goal: this.refs.goal.value
        }
      ACTIONS.createNewUser(newUserData)


},

  render: function (){
    return (
      <div className = "create-soft">
        <p className = "create-h1"> Create Profile </p>
          <form className = "create-profile" onSubmit={this._handleLogin}>
          <p className = "create-field" >Username:</p>
          <input className="create-text" name="username" ref={ 'username' }></input>
          <p className = "create-field" >Password:</p>
          <input className="create-text" name="password" ref={ 'password' }></input>
          <p className = "create-field" >Financial Goal:</p>
          <input className="create-text" name="goal" ref={ 'goal' }></input>
          <br></br>
          <div>
          <button className='button create-btn'>Submit</button>
              </div>
                  </form>
        </div>
      )}
}
)

module.exports = CreateView
