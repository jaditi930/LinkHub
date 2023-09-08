const express=require("express")
const asyncHandler=require("express-async-handler")
const LinkHub=require("../models/linkhub")
const router=express.Router();
const validateToken=require("../middleware/token")

router.post("/create", validateToken, asyncHandler(async(req,res)=>{
    const {gfg,leetcode,codechef,codeforces,hackerrank,hackerearth,
        facebook,instagram,linkedin,github,website,portfolio,others}       = req.body

    const linkHub=new LinkHub({user:req.user.username,gfg,leetcode,codechef,codeforces,hackerrank,hackerearth,
        facebook,instagram,linkedin,github,website,portfolio})
        linkHub.set("others",others)
        linkHub.save()
    res.status(200).json(linkHub)
}))

router.get("/view",validateToken, asyncHandler(async(req,res)=>{
    const linkHub=await LinkHub.findOne({user:req.user.username})
    console.log(linkHub)
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

module.exports = router;
