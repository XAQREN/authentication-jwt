const jwt = require("jsonwebtoken");


module.exports = (req,res,next)=>{

    const token = req.header("token");
    if(!token) return res.status(401).json({message:"auth failure"});
    try{
        const decoded = jwt.verify(token,"randomstring");
        req.user=decoded.user;
        next();

    }catch(e){
        console.log(e);
        res.status(500).send({message:"invalid token"});
    }
}