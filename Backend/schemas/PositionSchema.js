const {Schema} = require("mongoose");

const PositionSchema = new Schema({
  product:    String, 
  instrument: String,  
  qty:        Number, 
  avg:        Number,  
  price:      Number, 
  net:        String, 
  day:        String, 
  isLoss:     Boolean
})

module.exports = PositionSchema
