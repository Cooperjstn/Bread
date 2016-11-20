const Backbone = require('backbone')

const ACTIONS = {
  authenticateUser: function(userDataObj){
     console.log('user data obj', userDataObj)
     let userMod = new UserModel()

     userMod.set(userDataObj)
     console.log('user mod', userMod)

     userMod.save().then(function(serverRes){
        console.log('serverres', serverRes)
        location.hash = "/payments"
     })
    }
  }

  module.exports = ACTIONS
