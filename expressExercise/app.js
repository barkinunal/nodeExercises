var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    };
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send(sound);
});

app.get("/repeat/:word/:number", function(req,res){
    var num = Number(req.params.number);
    var word = req.params.word;
    var str = "";
    for (var i = 0; i < num; i++) {
        str += word + " ";
    }
    res.send(str);
});

app.get("*", function(req,res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, process.env.IP, function(){
    console.log("The server has started!");
});