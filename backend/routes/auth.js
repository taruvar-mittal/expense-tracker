const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = process.env.SECRET;

// creating a new user using POST - no login required
router.post('/createuser',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('name', 'Enter a valid name').isLength({ min: 3 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // checking if a user with entered email already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                res.status(400).json({ error: "Sorry! A user with given email already exists" })
            }

            //hashing password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password,salt);

            //creating a new user
            user = await User.create({
                name : req.body.name,
                password : secPass,
                email : req.body.email
            })

            const data = {
                user:{
                    id: user.id
                  }
            }
            
            const authToken  = jwt.sign(data, JWT_SECRET);

            res.json({authToken});

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message })
        }

});



// login user
router.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be empty').exists()] ,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            
            const user = await User.findOne({email : req.body.email});

            if(!user){
                res.status(400).json({error : 'Enter valid credentials'})
            }

            const comparePassword = await bcrypt.compare(req.body.password,user.password);

            if(!comparePassword){
                res.status(400).json({error : 'Enter valid credentials'})
            }

            const data = {
                user: {
                  id : user.id
                }
            }

            const jwtToken = jwt.sign(data,JWT_SECRET);

            res.json({jwtToken});

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message })
        }

    })


// getuser
router.post('/getuser', fetchuser, async (req,res)=> {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.log(error);
            res.status(500).json({ error: error.message })
    }
})






module.exports = router;
