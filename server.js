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
app.listen(3000,function(){
    console.log("Server started at port 3000");
});