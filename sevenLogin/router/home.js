const express=require("express");
const query=require("../db/index");
let {create,verify}=require("../token/index");
let router=express.Router();
// 接口1
router.get("/api1",(req,res)=>{
    
});
//注册接口
router.post("/registry", express.urlencoded(), async (req,res)=>{
  let {user,password}=req.body;
  let data= await query("SELECT * FROM login");
  let index= data.findIndex(item=>item.user===user)
  let result={};
  if(index===-1){
    result={
      msg:"success",
      data:"注册成功"
    }
    let data1 = await query(`INSERT  INTO login(id,user,password) VALUES (${null},'${user}','${password}')`)
  }else {
    result={
      msg:"fail",
      data:"用户名存在，注册失败"
    }
  }
  res.send(result);

})
//登录接口
router.get("/login", async (req,res)=>{
  let {user,password}=req.query;
  let data= await query("SELECT * FROM login");
  let index= data.findIndex(item=>item.user===user);
  let index2= data.findIndex(item=>item.password===password);
  let index3= data.findIndex(item=>item.user===user&&item.password===password);
 let  result={};
  if(index===-1){
    result={
      status:0,
      msg:"fail",
      data:"用户名不存在"
    }
  }else if(index!==-1&&index2===-1){
    result={
      status:1,
      msg:"fail",
      data:"密码不正确"
    }
  }else if(index3==!-1){
    create(password)
    result={
      status:2,
      msg:"success",
      data:"登录成功",
      token:create(password)
    }
  }
  res.send(result)
})
//验证token
router.get("/verifyToken",(req,res)=>{
  let {token}=req.query;
  console.log(token);
  let result={};
  if(verify(token)){
    result={
      msg:"success",
      data:true,
    }
  }else{
    result={
      msg:"fail",
      data:false
    }
  }
  console.log(result);
  res.send(result);
})
module.exports=router;