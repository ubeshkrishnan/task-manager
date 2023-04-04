const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.json({"Message":"Hai"});
})

app.listen('2001', ()=> {console.log('Port Running in 2001')});