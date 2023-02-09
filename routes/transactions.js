const express = require('express');
const { createTransaction, updateNote, deleteTransaction, getTransaction } = require('../controllers/transactions');
const auth = require('../middlewares/auth');
const transactionRouter = express.Router();

transactionRouter.get('/',auth,getTransaction);

transactionRouter.post('/',auth,createTransaction)

transactionRouter.delete('/:id',auth,deleteTransaction)

// noteRouter.put('/:id',auth,updateNote)

module.exports = transactionRouter;
