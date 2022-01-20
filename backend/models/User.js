const mongoose= require('mongoose');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true, 
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    budget : {
        type : Number,
        default : 0
    },
    categories : {
        type : Array,
        deafult : []
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const User = mongoose.model('user',UserSchema);

module.exports = User;