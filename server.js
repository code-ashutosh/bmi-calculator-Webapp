const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req, res){
res.sendFile(__dirname+"/bmicalc.html");
});
app.post("/",function(req, res){
    let weight = Number(req.body.weight);//in Kg
    let height = Number(req.body.height);//in mteres
    let bmi = weight/(height*height);// in Kg/metre2
    res.send("Your BMI is = "+bmi);
});
app.get("/addition.html",function(req, res){
res.sendFile(__dirname+"/addition.html");
});
app.post("/addition",function(req, res){
let num1=Number(req.body.n1);
let num2=Number(req.body.n2);
let result= num1+num2;
res.send("Addition ="+result);
});
app.listen(3000,function(){
    console.log("Server started at port 3000");
});