const admin = require('../model/adminModel')
const jwt = require('jsonwebtoken')

//loginAdmin
exports.adminLogin = async(req,res) => {
    const {email,password} = req.body;
   console.log("inside admin login");
    try {
        const existingUser = await admin.findOne({ email: email, password: password })
        if (existingUser) {
            const token = jwt.sign({userId:existingUser._id},process.env.SECRET_KEY)
            console.log(token);
            
            res.status(200).json({existingUser,token})
            console.log(existingUser);           
        }
        else {
            res.status(401).json("invalid email or password")
        }
    }
    catch (error) {
        res.status(401).json(error)

    };

}