//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({exttended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {

  let today = new Date();
  let currDay = today.getDay();

  let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };

 let day = today.toLocaleDateString("en-US",options);

  res.render("list1", {listTitle: day, newListItems: items});

});

app.post("/",function(req,res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.post("/work",function(req,res){
  let item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list1", {listTitle:"Work List", newListItems:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});


app.listen(3000, function() {
  console.log("Server listning at port 3000");
});
