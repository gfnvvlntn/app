const {Schema, model}  = require('mongoose')

const BudgetSchema = new Schema({
    balance : {type: Number, required: true, default: 1},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('Budget', BudgetSchema)