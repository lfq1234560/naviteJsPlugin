const express=require("express");
const query=require("../db/index");
const multer = require("multer");
let router=express.Router();
//上传接口
var storage = multer.diskStorage({
    destination: 'upload/',
    filename(req, file, cb) {
        let arr = file.originalname.split('.');
        cb(null, arr[0] + '-' + Date.now() + '.' + arr[1]);
    }
});
var upload = multer({
    storage,
});
router.post("/upload", upload.single('tupian'),async (req, res) => {
    let arr = req.file.path.split("\\");
    let url = "http://localhost:5000/upload/" + arr[1];
    let data = await query(`INSERT  INTO tupian(id,url) VALUES (${null},'${url}')`);
    let result={};
    if(data.affectedRows){
        result={
            msg:"success",
            data:"上传成功",
        }
    }else{
        result={
            msg:"fail",
            data:"上传失败"
        }
    }
    res.send(result);
});
//图片显示接口
router.get("/showImg", async (req,res)=>{
    let data=await query("SELECT * FROM tupian");
    let result={};
    if(data.length>0){
        result={
            msg:"success",
            data:data[data.length-1],
        }
    }else {
        result={
            msg:"fail",
            data:"图片显示失败",
        }
    }
    res.send(result);
})
// 清空图片接口
router.delete("/del", async (req,res)=>{
   let data=await query("TRUNCATE TABLE tupian");
   let result={};
   if( data.affectedRows===0){
       result={
           msg:"success",
           data:"删除成功",
       }
   }else {
       result={
           msg:"fail",
           data:"删除失败"
       }
   };
   res.send(result);
})
module.exports=router;