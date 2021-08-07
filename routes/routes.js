// load up the chart route
const chartRoute = require("./pacmed-chart");

const appRouter = (app, fs) => {
  //handling empty routes
  app.get("/", (req, res) => {
    res.send("Welcome to the Pacmed development api-server");
  });

  // run chart route module to complete the wire up
  chartRoute(app, fs);
};

module.exports = appRouter;
