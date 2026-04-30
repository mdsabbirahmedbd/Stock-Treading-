const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
  symbol: String,  
  qty:     Number,  
  avg:     Number,   
  ltp:     Number, 
  curVal:  Number,  
  pnl:     Number,  
  netChg:  Number,  
  dayChg:  Number,  
})

module.exports = HoldingsSchema