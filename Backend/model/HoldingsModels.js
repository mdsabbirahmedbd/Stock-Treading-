const {model} = require('mongoose')

const HoldingsSchema = require('../schemas/HoldingsSchema')
const HoldingModel = new model('holdings', HoldingsSchema)

module.exports = HoldingModel
