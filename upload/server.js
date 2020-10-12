const express=require("express");
const allRouter=require("./router/index");
let app=express();
app.use(express.static("./"));
app.use(allRouter);
app.listen(5000,()=>{
    console.log("5000端口服务器开启");
});