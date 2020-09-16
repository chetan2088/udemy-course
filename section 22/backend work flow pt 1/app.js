// 
// 
// setup

var express = require('express'),
    app = express(),
    mongoose = require("mongoose"),
    logger = require('morgan'),
    bodyParser = require('body-parsar'),

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true }));
//  database stuff
mongoose.connect(process.env.MONGOLAB_URI || "mongolab://localhost/dog_demo_app");
var dogSchema = new mongoose.Schema ({
                    name: String,
                    breed: String,
                });
var dog = mongoose.model("dog", dogSchema);

// routes

app.get("/", function(req, res){
  res.render("home");
});

app.get("/dogs", function(req, res){
  Dog.find({}, function(err, dogs){
    res.render("dogs", {dogs: dogs});
  });
});

app.post("/createDog", function(req, res){
  Dog.create({
    name: req.body.name,
    breed: req.body.breed
  }, function(err, dog){
    res.redirect("/dogs");
  });
});
app.listen(3000, function(){
  console.log("serving dog demo on port 3000")
}); 