const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const CreateView = React.createClass({

     _handleLogin: function(evt){



        evt.preventDefault()

        let newUserData = {
           username: this.refs.username.value,
           password: this.refs.password.value,
           goals: this.refs.goals.value
        }
      ACTIONS.createNewUser(newUserData)


},

  render: function (){
    return (
      <div className = "create-soft">
        <h1 className = "create-h1"> Create Profile </h1>
          <form className = "create-profile" onSubmit={this._handleLogin}>
          <p>Username:</p>
          <input className="create-text" name="username" ref={ 'username' }></input>
          <p>Password:</p>
          <input className="create-text" name="password" ref={ 'password' }></input>
          <p>Financial Goal:</p>
          <input className="create-text" name="goal" ref={ 'goals' }></input>
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
