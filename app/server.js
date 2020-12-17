const express = require("express");
const routes = require("./routes");

const app = express();
// Use middleware to parse JSON from POST requests
app.use(express.json());
// Deactivate CORS for this demo
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = 8000;

// Define routes
for (let { method, entrypoint, path } of routes) {
  switch (method) {
    case "get":
      app.get(path, entrypoint);
      break;
    case "post":
      app.post(path, entrypoint);
      break;
    default:
      console.error("Unknown method", method);
  }
}

app.listen(port);

console.log(`Server listening to ${port}`);
