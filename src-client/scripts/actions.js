const Backbone = require('backbone')
const STORE = require('./store.js')
const UserModel = require('./model-user.js')
const PaymentModel = require('./model-payments.js')
const OopsView = require('./404.js')
const SaveModel = require('./savings-model.js')
const {StatementModel, StatementCollection} = require('./model-statements.js')

const {seed_userStatements} = require('./seed.js')

const ACTIONS = {
  authenticateUser: function(userDataObj){
     //console.log('user data obj', userDataObj)
     let userMod = new UserModel()

     userMod.set(userDataObj)


     userMod.save().then(function(serverRes){
        //console.log('serverres', serverRes)
        location.hash = "/dashboard"
     }).fail(function(err){
        location.hash = "/404"
      })
   },

   createNewUser: function(newUserData){
     let userMod = new UserModel()
     userMod.set(newUserData)
     userMod.url = '/signup'

     userMod.save().then(function(){
        window.location.hash = "/dashboard"
     })
  },

  submitNewBudget: function(newPaymentData){
   let payMod = new PaymentModel()

   payMod.set(newPaymentData)
   console.log('pay mod', payMod)
   payMod.url = '/payments'

   // payMod.save().then(function(){
   //    window.location.hash = "/savings"
   // })

   //mock data~~~~
   payMod.set({
      id: Math.floor(Date.now() / 1000),
      name: payMod.get('budgetName'),
      moneyAfterPayments: payMod.get("income") -payMod.get('rent') - payMod.get('other') - payMod.get('utilities'),
      user:{
         "id":1,
         "username":"Troy",
         "password":"sha1:64000:18:qqg7ZaLDUknJ6pHbb7pSTcmFw99GZomX:zTBeUju6YgDKNgywpC8TSvj8",
         "goal":1000.0,
         "admin":true
      }
   })
   //~~~~~~~


   STORE.setStore('currentBudgetStatement', payMod)

   window.location.hash = "budget-statement/new/investment-options"
 },

   createNewSavings: function(formData) {

     let savMod = new SaveModel()
       savMod.set(formData)
       savMod.url = "/savings"

      //  savMod.save().then(function(){
      //    window.location.hash = "/savings"
      //  })

      //MOCK DATA~~~
      savMod.set(formData)
      savMod.set(STORE.getStoreData().currentBudgetStatement.toJSON() )
      //~~~~~~~

      STORE.setStore('userStatements', [ ...STORE.getStoreData().userStatements, savMod ] )
      window.location.hash = "dashboard"
    },


  fetchUserStatements: function(userStatement){
     console.log('store',STORE);
    let statementColl = new StatementCollection()

    statementColl.set()
    statementColl.url = '/statements'

    console.log("?????", seed_userStatements.models)
   //  statementColl.fetch().then(function(){
   //    console.log('state coll', statementColl)
   //   })

   }
 }

 module.exports = ACTIONS
