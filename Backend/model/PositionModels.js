const {model} = require('mongoose')

const PositionSchema = require('../schemas/PositionSchema')
const PositionModel = new model('positions', PositionSchema)

module.exports = PositionModel
