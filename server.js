// create an instance of express to serve our end points
const express = require("express");

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require("fs");

// creating an instance of express to serve our end points
const app = express();

// this is where we handle our various routes from
const routes = require("./routes/routes")(app, fs);

// variables
const PORT = 3000;

// to parse the incoming requests with json payloads
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/chart", (req, res) => {
  res.send("Hello");
});

app.listen(
  PORT,
  console.log(`Server running on port: http://localhost:${PORT}`)
);
