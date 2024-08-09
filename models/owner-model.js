const mongoose = require('mongoose');
const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String
})

const OwnerSchema = mongoose.model('owner', ownerSchema);

module.exports = OwnerSchema;