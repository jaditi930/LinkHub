const mongoose=require("mongoose")

const linksSchema = mongoose.Schema(
    { 
        author:{
            type:String,
        ref:'User'
        },
        gfg:{
            type:String,   
        },
        leetcode:{
            type:String,   
        },
        codechef:{
            type:String,   
        },
        codeforces:{
            type:String,   
        },
        hackerrank:{
            type:String,   
        },
        hackerearth:{
            type:String,   
        },
        instagram:{
            type:String,   
        },
        facebook:{
            type:String,   
        },
        linkedin:{
            type:String,   
        },
        github:{
            type:String,   
        },
        website:{
            type:String,   
        },
        portfolio:{
            type:String,   
        },
    },
        {
            strict:false
        }
    )

    module.exports = mongoose.model("LinkHub", linksSchema);
