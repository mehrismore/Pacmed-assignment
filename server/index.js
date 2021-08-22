const express = require("express");
const fs = require("fs");

// variables
const PORT = 8000;
const dataPath = "./data/chart.json";
const cors = require("cors");

const app = express();

// to parse the incoming requests with json payloads
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Pacmed!");
});

// READ
app.get("/v1/chart-data", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      console.log(error.status);
    }
    res.send(JSON.parse(data));
  });
});

app.listen(
  PORT,
  console.log(`Server running on port: http://localhost:${PORT}`)
);
