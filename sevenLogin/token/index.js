let jwt=require("jsonwebtoken");
let secret="lfq";
function create(password,expiresIn=60*60*24*7){
   let token= jwt.sign({data:password},secret,{expiresIn});
   return token;
};
function verify(token){
    try {
        jwt.verify(token,secret);
        return true;
    } catch (error) {
        return false;
    }
};
module.exports={
    create,
    verify

}