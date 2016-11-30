const {StatementCollection} = require('./model-statements.js')

let seed_userStatements = [
   {
      "id":1,
      "name":"Vacation",
      "income":2000.0,
      "rent":750.0,
      "utilities":150.0,
      "other":600.0,
      "moneyAfterPayments":500.0,
      "savingsAccount":100.0,
      "moneyMarketFund":100.0,
      "mutualFund":100.0,
      "saved":300.0,
      "date": "11-2016",
      "user":{
         "id":1,
         "username":"Troy",
         "password":"sha1:64000:18:qqg7ZaLDUknJ6pHbb7pSTcmFw99GZomX:zTBeUju6YgDKNgywpC8TSvj8",
         "goal":1000.0,
         "admin":true
      }
   },
   {
      "id":2,
      "name":"Vacation",
      "income":2000.0,
      "rent":750.0,
      "utilities":250.0,
      "other": 800.0,
      "moneyAfterPayments":200.0,
      "savingsAccount":50.0,
      "moneyMarketFund":50.0,
      "mutualFund":50.0,
      "saved": 50.0,
      "date": "12-2016",
      "user":{
         "id":2,
         "username":"Troy",
         "password":"sha1:64000:18:qqg7ZaLDUknJ6pHbb7pSTcmFw99GZomX:zTBeUju6YgDKNgywpC8TSvj8",
         "goal":1000.0,
         "admin":true
      }
   },

]

let coll = new StatementCollection()
coll.set(seed_userStatements)
module.exports = {
   seed_userStatements: coll
}
