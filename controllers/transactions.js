const transactionModel = require('../models/Transaction')

const createTransaction = async (req,res) =>{
    console.log(req.userId)
    const {text,amount} = req.body;
    const newTransaction = new transactionModel ({
        text:text,
        amount:amount,
        userId:req.userId
    });
    try {
        await newTransaction.save();
        res.status(201).json({
            success:true,
            data:newTransaction
        })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})
    }
}

// const updateNote = async (req,res) =>{
//     const id = req.params.id;
//     const {text,amount,createdAt} = req.body;
//     const newNote = {
//         text:text,
//         amount:amount,
//         createdAt:createdAt,
//         userId:req.userId
//     };
//     try {
//         await transactionModel.findByIdAndUpdate(id,newNote,{new:true});
//         res.status(200).json(newNote)    
//     } 
//     catch (error) {
//         console.log(error)
//         res.status(500).json({message:"Something Went Wrong"})
//     }
// }

const deleteTransaction =async (req,res) =>{
    const id = req.params.id;
    try {
        const transaction = await transactionModel.findByIdAndRemove(id)    
        res.status(202).json({
            success:true,
            data:{}
        }) // 202 means your request is accepted 
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})
    }

}

const getTransaction = async (req,res) =>{
    try {
        const transaction = await transactionModel.find({userId:req.userId})    
        res.status(200).json({
            count:transaction.length,
            data:transaction
        })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})
    }
}

module.exports = {createTransaction,deleteTransaction,getTransaction}