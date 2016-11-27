const React = require('react')
const ReactDOM = require('react-dom')

const OopsView = React.createClass({

  render: function() {
    return (
      <div>
         <h1 className="oops-header text-center">Something's wrong!</h1>
         <h2 className="oops-comment text-center">Either your username or password was incorrect</h2>
      </div>
    )
  }
});

module.exports = OopsView
