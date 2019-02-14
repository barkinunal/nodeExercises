var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to db

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save((error, cat) => {
//     if(error){
//         console.log("Something went wrong");
//         console.log(error);
//     } else {
//         console.log("Cat has just saved to database");
//         console.log(cat);
//     }
// });

//retrieve all cats from the db and console.log each one

// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: "Bland"
// }, (err, cats) => {
//     if (err) {
//         console.log("Error occured");
//         console.log(err);
//     } else {
//         console.log("Cat created");
//         console.log(cats); 
//     }
// });

Cat.find({}, (err, cats) => {
    if (err) {
        console.log("Error occured");
        console.log(err);
    } else {
        console.log("All the cats...");
        console.log(cats);
    }
});

// Cat.remove({
//     name: "Snow White"
// }, (error,cats) => {
//     if (error) {
//         console.log("Error occured");
//         console.log(error);
//     } else {
//         console.log("Cat deleted");
//     }
// });