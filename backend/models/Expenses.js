const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    },
    title : {
        type:String,
        required:true
    },
    value : {
        type : Number,
        required : true
    },
    category: {
        type:String,
        default:'general'
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('expenses',ExpensesSchema);