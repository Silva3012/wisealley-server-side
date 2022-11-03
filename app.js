const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://admin-ntsika:Test123@cluster0.7xtlfi5.mongodb.net/wisealleyDB"
);

const questionsSchema = new mongoose.Schema({
  question: String,
  a: String,
  b: String,
  c: String,
  d: String,
});

const Question = mongoose.model("Question", questionsSchema);

// app.get("/", function (req, res) {
//   res.sendFile("index.html");
// });
app.get("/", function (req, res) {
  // res.render("index");
  Question.find({}, function (err, foundQuestions) {
    if (err) {
      console.log(err);
    } else {
      // console.log(foundQuestions);
      res.render("index", { questions: foundQuestions });
    }
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
