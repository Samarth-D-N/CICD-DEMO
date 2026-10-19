const express = require('express');
const {sum}=require('./sum.js');
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("hello baby");
});

app.get("/getSum/:a/:b",(req,res)=>{
let a=parseInt(req.params.a);
let b=parseInt(req.params.b);
let result=sum(a,b);
res.send(`sum of ${a} and ${b} is ${result}`);
})