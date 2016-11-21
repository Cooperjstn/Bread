const Backbone = require('backbone')
const STORE = require('./store.js')

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
   },
   createNewUser: function(newUserData){
     const UserMod = new UserModel()
     userMod.set(newUserData)
     userMod.url = '/signup'
     return userMod.save().then(function(){
        window.location.hash = "login"
     })
  },

    }


  module.exports = ACTIONS
