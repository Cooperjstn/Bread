const Backbone = require('backbone')

const STORE = {
   _data:  {
       currentViewSetting : '',
       currentBread : [],
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
      return this._data
   },

   onChange: function(someFunc){
      Backbone.Events.on('storeChange', someFunc)
   }

}

module.exports = STORE
