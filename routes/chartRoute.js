const express = require("express");
const app = express();
app.use(express());

// variables
const dataPath = "./data/chart.json";

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

  app.post('/chart', (req, res) => {
    console.log(req.body)
    res.send(`I received your POST request. This is what you sent me: ${req.body.post}`)
  })
};

module.exports = chartRoute;
