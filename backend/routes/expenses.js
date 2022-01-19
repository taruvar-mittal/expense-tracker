const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Expense = require('../models/Expenses');
const { body, validationResult } = require('express-validator');
 
// fetch all expenses for a particular user
router.get('/fetchallexpenses',fetchuser,async (req,res)=>{
    try {
        const expenses = await Expense.find({user : req.user.id });
        res.json({expenses});
    } catch (error) {
        console.log(error);
            res.status(500).json({ error: error.message })
    }
})


// create new expense
router.post('/createexpense', fetchuser,[
    body('title', 'Title must be atleast 5 characters').isLength({ min: 5 }),
    body('value', 'Value must be a number').isNumeric()
], async(req,res) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

    try {
        
        const expense = new Expense({
            title : req.body.title,
            value : req.body.value,
            category : req.body.category,
            user : req.user.id
        })

        const newExpense = await expense.save();

        res.json(newExpense);

    } catch (error) {
        console.log(error);
            res.status(500).json({ error: error.message })
    }
})


//update an expense
router.put('/updateexpense/:id', fetchuser, async (req,res) => {
    try {
        
        let expense = await Expense.findById(req.params.id);
        if(!expense){
            res.status('404').json({error : "not found"})
        }
        const matchUser = expense.user.toString() !== req.user;
        if(!matchUser){
            res.status("401").json({error : "not allowed"})
        }

        // console.log(req.body);
        const newExpense = {};
        if(req.body.title) newExpense.title = req.body.title;
        if(req.body.value) newExpense.value = req.body.value;
        if(req.body.category) newExpense.tag = req.body.category;

        // console.log(expense);
        expense = await Expense.findByIdAndUpdate(req.params.id, {$set: newExpense}, {new:true})
          
        // console.log(expense);
        res.json(expense);

    } catch (error) {
        console.log(error);
            res.status(500).json({ error: error.message })
    }
})

// delete an expense
// router.delete('/deleteexpense/:id', fetchuser, async (req,res) => {
//     try {
        
//         let expense = await Expense.findById(req.params.id);
//         if(!expense){
//             res.status('404').json({error : "not found"})
//         }
//         const matchUser = expense.user.toString() !== req.user;
//         if(!matchUser){
//             res.status("401").json({error : "not allowed"})
//         }

//         expense = await Expense.findByIdAndDelete(req.params.id)

//         res.json({"success" : "Expense deleted successfully", expense});

//     } catch (error) {
//         console.log(error);
//             res.status(500).json({ error: error.message })
//     }
// })



module.exports = router;