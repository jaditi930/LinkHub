const express=require("express")
const asyncHandler=require("express-async-handler")

const router=express.Router();
const validateToken=require("../middleware/token")

router.post("/create",validateToken)

router.get("/view",validateToken)

router.post("/edit",validateToken)


module.exports = router;
