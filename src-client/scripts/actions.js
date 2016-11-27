const Backbone = require('backbone')
const STORE = require('./store.js')
const UserModel = require('./model-user.js')
const PaymentModel = require('./model-payments.js')
const OopsView = require('./404.js')

const SaveModel = Backbone.Model.extend({})



const ACTIONS = {
  authenticateUser: function(userDataObj){
     //console.log('user data obj', userDataObj)
     let userMod = new UserModel()

     userMod.set(userDataObj)


     userMod.save().then(function(serverRes){
        //console.log('serverres', serverRes)
        location.hash = "/payments-page"
     }).fail(function(err){
        location.hash = "/404"
      })
   },

   createNewUser: function(newUserData){
     const UserMod = new UserModel()
     userMod.set(newUserData)
     userMod.url = '/signup'

     userMod.save().then(function(){
        window.location.hash = "login"
     })
  },

  submitPaymentFields: function(newPaymentData){
   let payMod = new PaymentModel()

   payMod.set(newPaymentData)
   console.log('pay mod', payMod)
   userMod.url = '/payment'

   payMod.save().then(function(){
      window.location.hash = "savings"
   })
 },

   createNewSavings: function(formData) {

     const savMod = new SaveModel()
       savMod.set(formData)
       savMod.url = "/savings"

       savMod.save().then(function(){
         window.location.hash = "savings"
       })
     },

    }


  module.exports = ACTIONS
