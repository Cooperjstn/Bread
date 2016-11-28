const React = require('react')
const ReactDOM = require('react-dom')

const OopsView = React.createClass({

  render: function() {
    return (
      <div className = "oops-top">
      <img className="oops-header" src="../images/404.png" alt="image"></img>
      </div>
    )
  }
});

module.exports = OopsView
