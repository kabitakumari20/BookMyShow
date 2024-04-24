const express = require('express');
const connectToDatabase = require('./src/db/db');
const routes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

routes.map((route) => {
  app.use(route.path, route.handler);
});

app.get("/", (req, res) => {
  res.send("Backend is Running");
});

connectToDatabase()
  .then(() => {
    // Database connection successful, start the server
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });