const express=require("express");
const allRouter=require("./router/index");
let app=express();
app.use(express.static("./"));
app.use(allRouter);
app.listen(4000,()=>{
    console.log("4000端口服务器开启");
});