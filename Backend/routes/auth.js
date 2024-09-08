const express= require('express');
const User=require('../model/User');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const router= express.Router();


//Register

router.post('/register',async(req,res)=>{
const {username,password,email}=req.body;

try {
    const hashedPassword = await bcrypt.hash(password,10);

    //create user
    const user= new User({username,email,password:hashedPassword});
    await user.save();
    res.json(user).json({message:'User Resgistered Successfully'});
} catch (error) {
 res.status(500).json({message:error.message});    
}
})

//Login

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ error: "User not found" });
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  
      // Generate JWT
      const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: '1h' });
  
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });
module.exports = router;