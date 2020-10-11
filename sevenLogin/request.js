const request=require("request");
request({url:"http://localhost:5000/home/api2",method:"post",form:{a:"lfq"}},(err,res,body)=>{
    console.log(res);
})