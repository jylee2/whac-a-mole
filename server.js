// Require express framework for Node.js
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
// To load files in /public
app.use(express.static('public'));

// direct users to index.html when they visit https://Whac-A-Mole.jylee3.repl.co/
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// direct users to scoreboard.html when they visit https://Whac-A-Mole.jylee3.repl.co/scoreboard.html
app.get('/scoreboard.html', (req, res) => {
  res.sendFile(__dirname + '/views/scoreboard.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});

console.log(`================================`);
// Body Parser, otherwise body will be undefined
const bodyParser = require("body-parser");
// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Install & Setup Mongoose to use MongoDB
const mongoose = require("mongoose");
// Connect to database via URI in .env file
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Check if database configuration is ok
// 2 = connecting
console.log(`Check database configuration: ${mongoose.connection.readyState}`);
// Everything in Mongoose starts with a Schema
const Schema = mongoose.Schema;

// Each schema maps to a MongoDB collection & defines the shape of the documents within that collection
const userSchema = new Schema({
  username: {type: String, required: true},
  score: {type: Number},
  date: {type: Date}
});
// Compile schema into a Model
const UsernameModel = mongoose.model("UsernameModel", userSchema);

// POST to save player name, score and time
//app.post("/api/post/add-player-score", (request, response) => {
app.route("/api/post/add-player-score")
  .post( (request, response) => {

  // <input name="username">
  const inputUsername = request.body["username"];
  // <input name="score">
  const playerScore = request.body["score"];
  console.log(`request.body["score"]: ${request.body["score"]}`);
  //request.body["score"]: undefined
  // get current date
  const currentDate = new Date();
  
  // Create record object from mongoose Model
  const usernameRecord = new UsernameModel({
    username: inputUsername,
    score: playerScore,
    date: currentDate
  });
  // Save data into MongoDB
  usernameRecord.save( (error, data) => {
    if(error){
      console.log(`Save username error: ${error}`);
    }
    else {
      console.log(`Saving username data`);

      // Display JSON as a response
      // response.json({
      //   username: data["username"],
      //   score: data["score"],
      //   date: data["date"]
      // });

      // Redirect back to home page
      response.writeHead(302,{
            'Location': 'https://whac-a-mole.jylee3.repl.co/scoreboard.html',
        });
      response.end();

    }
  });

});

// API for frontend to get data in JSON
// app.get("/api/scoreboard.json", (request, response) => {
app.route("/api/scoreboard.json")
  .get( (request, response) => {

  // Find all data
  UsernameModel.find({})
    // 0 means false to hide, 1 means true to show
    .select({
      username: 1,
      score: 1,
      date: 1
    })
    // Execute
    .exec( (error, data) => {
      if(error){
        console.log(`Find data error: ${error}`);
      }
      else {
        // console.log(`data.length: ${data.length}`);
        // filter out data points without score key
        let output = data.filter( (a) => {
            if(a["score"]){
              return a;
            }
          })
          // sort data by score value
          .sort( (a, b) => {
            return b["score"] - a["score"];
          });
        // console.log(`output: ${output}`);

        // Get top 20 scores
        if(output.length > 20){
          // get output[0 to 99]
          output = output.slice(0, 20);
        }

        // Display the data in JSON for frontend dev
        response.json(output);

        // response.json({
        //   username: data["username"],
        //   score: data["score"],
        //   date: data["date"]
        // });
      }
    });

});

// console.log(`> Last line of node.js app`);