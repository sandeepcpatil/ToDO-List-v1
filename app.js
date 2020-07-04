const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items= ["Eat", "Sleep", "Conquer"];
let workItems=[];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
      weekday: "long",
      month: "long",
      day: "numeric"
  };
  var day = today.toLocaleDateString("en-us", options);
res.render("list", { listTitle: day, newListItems: items });
  
});

app.post("/", function(req, res){
   item = req.body.newItem;
   items.push(item);
  res.redirect("/");
});
app.get("/work", function(req,res){
  res.render("list", {listTitle: "work", newListItems: workItems });
})


app.post("work", function(req, res){
  let item= req.body.newItem;
  workItems= push(item);
  res.redirect("/work");
});

app.listen(3000, function (req, res) {
  console.log("Server is started on port 3000");
});
