const Backbone = require('backbone')
//const {seed_userStatements} = require('./seed.js')

const STORE = {
   _data:  {
       currentViewSetting : '',
       currentData : [],
       singleListing: {}, //Backbone Model instance
       currentBudgetStatement: {},
       userStatements: [] //seed_userStatements.models
    },

   setStore: function(storeProp, payload){
      if(typeof this._data[storeProp] === 'undefined'){
         console.error(`Sorry, ${storeProp} is not a value on the store, you need to declare it first`)
         return
      }

      this._data[storeProp] = payload
      Backbone.Events.trigger('storeChange')
   },

   getStoreData: function(){
      console.log('get store data', this._data)
      return this._data

   },

   onChange: function(someFunc){
      Backbone.Events.on('storeChange', someFunc)
   }

}

module.exports = STORE
