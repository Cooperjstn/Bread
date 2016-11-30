const React = require('react')
const Backbone = require('backbone')
const ACTIONS = require('./actions')

const AboutView = React.createClass ({

  render: function() {
    return (

      <div className = "container-fluid abt">
        <div className = "abt-top">
          <img className="abtimage" src="../images/WIB.png" alt="image"></img>
        </div>
        <div className = "abt-info">
          <p className = "lead"> Hello Baker! Here @ Bread, a dedicated team of
          three young developers decided to build a web application that allows YOU, the USER,
          to learn how to budget, plan, and create new financial goals in a very simple, user friendly
          interface. We hope that this app will be the beginning of a new, solid financial future for you.

          Now let's fire up that oven. </p>
          </div>
          </div>
  )}
})

module.exports = AboutView
