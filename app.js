const express  = require('express');
const routherapi = require('./routes/routesapi');
const app  = express();

app.use('/api',routherapi);
app.listen(3000,function(){
    console.log('server started ');
});