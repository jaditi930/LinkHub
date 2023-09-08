const express=require("express")
const asyncHandler=require("express-async-handler")
const User=require("../models/user")
const LinkHub=require("../models/linkhub")
const router=express.Router();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {v4 : uuidv4} = require('uuid')
const validateToken=require("../middleware/token")

// linkhub routes
router.post("/create", validateToken, asyncHandler(async(req,res)=>{
    const exists=await LinkHub.findOne({"user":req.user.username})
    if(exists)
    {
        res.status(400).json({"message":"LinkHub already exists."})
        return;
    }
    const {gfg,leetcode,codechef,codeforces,hackerrank,hackerearth,
        facebook,instagram,linkedin,github,website,portfolio,others}       = req.body
    const def_path="user.jpeg"
    var path=""
    try{
        const {profile}=req.files;
        console.log(profile)
        path=uuidv4()+profile.mimetype.split("/")[1]
    }
    catch{
    path=def_path
    }
    console.log(others)
    const linkHub=new LinkHub({user:req.user.username,gfg,leetcode,codechef,codeforces,hackerrank,hackerearth,
        facebook,instagram,linkedin,github,website,portfolio,path})
        linkHub.set("others",others)
        linkHub.save()
        if(path!=def_path)
        profile.mv('./'+ '/static/profiles/'+path+"."+profile.mimetype.split("/")[1]);
        res.status(200).json(linkHub)
}))

router.post("/edit",validateToken,  asyncHandler(async(req,res)=>{

    const filter={"user":req.user.username}
    const linkhub=await LinkHub.findOneAndUpdate(filter,
        req.body,{
            new:true
        })
    
    if(!linkhub)
    {
        res.status(400).json({"message":"No LinkHub found for current user"})
    }

    res.status(200).json(linkhub)
   
 }))

 router.get("/:username",asyncHandler(async(req,res)=>{
    const linkHub=await LinkHub.findOne({user:req.params.username})
    console.log(linkHub)
    res.status(200).json(linkHub)
}))

// user auth routes
router.post("/signup",asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {firstname,lastname,username,password}=req.body
    const userAvailable = await User.findOne({ username:username });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
    const hashed_password=await bcrypt.hash(password,10)
    let newUser=""
    newUser= await User.create({firstname,lastname,username,password:hashed_password})
    if(!newUser)
    {
        res.status(400);
    throw new Error("User data us not valid");
    }
    console.log(newUser)
    res.status(200).json(newUser)
}))

router.post("/login",asyncHandler(async (req,res)=>{
    const {username,password}=req.body
    if(!username||!password)
    {
        res.status(400)
        throw new Error("Please enter username and password")
    }
    const user=await User.findOne({username:username})
    if(!user)
    {
        res.status(404)
        throw new Error("Username does not exist")
    }
    const hashed_password=await bcrypt.compare(password,user.password)
    if(!hashed_password)
    {
        res.status(400)
        throw new Error("Username or password is wrong")
    }
    const accessToken=jwt.sign({
        user:{
            username:user.username
    }},process.env.SECRET_KEY,{
        expiresIn:"1h"
    })
    res.status(200).json({"token":accessToken});
})
)

module.exports = router;
