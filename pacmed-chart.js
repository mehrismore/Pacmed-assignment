const express = require("express");
const fs = require('fs')
const app = express();
app.use(express());

// variables
const dataPath = "./data/pacmed-chart.json";

const chartRoute = (app, fs) => {
  // READ
  app.get("/chart", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = chartRoute;
