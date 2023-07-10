const VerifyToken=(req,res) =>{
    try{
     var accessToken ="FLKDGFJKDHJDJ5FG5D2D";
     var token= req.query["hub.verify_token"];
     var challenge= req.query["hub.challenge"];
     if (challenge !=null && token !=null && token == accessToken){
        res.send(challenge);
     } else {
        res.status(400).send();
     }
    }
    catch(e){
     res.status(400).send;
    }
res.send("hola world");
}
const receivedMessage =(req,res)=>{
    res.send("hola Recevied");
}
module.exports ={
    VerifyToken,
    receivedMessage  
}
