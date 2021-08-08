// load up the chart route
const chartRoute = require("./chartRoute");

const appRouter = (app, fs) => {
  //handling empty routes
  app.get("/", (req, res) => {
    res.send("Welcome to the development Pacmed");
  });

  // run chart route module to complete the wire up
  chartRoute(app, fs);
};

module.exports = appRouter;
