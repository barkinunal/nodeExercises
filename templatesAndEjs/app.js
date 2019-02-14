var express = require('express');
var app = express();

app.get("/", function(req,res){
    //npm install ejs --save
    res.render("home.ejs"); 
    res.send("<h1>Welcome to the home page!</h1><h2>Blah blah</h2>");
});

app.get("/fallinlovewith/:thing", function(req,res){
   var thing = req.params.thing;
   res.render("love.ejs", {thingVar: thing});
});

app.listen(3000, process.env.ip, function(){
    console.log("Server is listening!!");
});