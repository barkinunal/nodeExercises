var express = require("express");
var app = express();

// "/" => "Hi there!"
// "/bye" => "Goodbye!"
// "/dog" => "Meow!"

app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req,res){
    res.send("Goodbye!");
});

app.get("/dog", function(req,res){
    console.log("Someone made a request to /dog!!!");
    res.send("Meow!");
});

app.get("*", function(req,res) {
    res.send("You are a STAR!");
});

app.listen(3000, process.env.IP, function(){
    console.log("Server has started!");
});