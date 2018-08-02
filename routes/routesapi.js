const express = require('express');
const app = express.Router();


app.use (function(req,res,next){
    console.log('redirec for this route ..');
    next();
});

app.get('/user',function(req,res){
    console.log('user request i there ...');
    res.send('user route ..');
});
app.post('user',function(req,res){

});
module.exports=app;