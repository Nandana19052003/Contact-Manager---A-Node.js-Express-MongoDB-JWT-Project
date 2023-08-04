const asyncHandler =  require("express-async-handler")
const bcrypt = require("bcrypt");
const User = require("../models/usermodel");

//@desc Register a user
//@route GET /api/users/register
//@access public

const registerUser = asyncHandler(async(req, res) => {
      const {username, email,password} = req.body;
      if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please fill all the fields");
      }
      const useravailable =  await User.findOne({email});
        if(useravailable){
            res.status(400);
            throw new Error("User already exists");
        }
    //hash password
    const hashedpass = await bcrypt.hash(password,10);
    console.log("hashed password :", hashedpass);
    const user = await User.create({
        username,
        email,
        password: hashedpass
    });

    console.log("User created : ", user)
     if (user){
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                password: user.password
            })
     }
        else{
            res.status(400);
            throw new Error("Invalid user data");
        }


    res.json({ message: "Register the user" });
  });

//@desc login a user
//@route GET /api/users/login
//@access public

const loginUser = asyncHandler(async(req, res) => {
    res.json({ message: "Login the user" });
  });

//@desc current user info
//@route GET /api/users/current
//@access public

const currentUser = asyncHandler(async(req, res) => {
    res.json({ message: "Current user information" });
  });
 

module.exports = {registerUser, loginUser, currentUser};