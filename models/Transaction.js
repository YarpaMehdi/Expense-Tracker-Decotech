const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please Add Some Text'],
    },
    amount:{
        type:Number,
        required:[true,'Please Add a Positive & Negative Number']
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model('Transaction',NoteSchema)