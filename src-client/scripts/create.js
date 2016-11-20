const React = require('react')
const Backbone = require('backbone')

const CreateView = React.createClass({
  render: function (){
    return (
      <div className = "create-soft">
      <h1 className = "create-h1"> Create Profile </h1>
        <form className = "create-profile">
        <p>Username:</p>
  <input type="create-text" name="username"></input>
  <p>Password:</p>
  <input type="create-text" name="password"></input>
  <p>Financial Goal:</p>
  <input type="create-text" name="goal"></input>
<br></br>
  <button className='button create-btn'>

    Submit

</button>
<br></br>
</form>
</div>


  )
  }

})

module.exports = CreateView
