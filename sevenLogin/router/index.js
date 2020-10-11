const express=require("express");
const homeRouter=require("./home");
let router=express.Router();
router.use("/home",homeRouter);
module.exports=router;