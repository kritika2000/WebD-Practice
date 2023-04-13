// Dotenv -> https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/
const connectDB = require("./db/connect");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const tasks = require("./routes/tasks");
const PORT = 5000;

// connect to DB
connectDB();

//middleware
app.use(express.json()); // To get the data in req.body

// all tasks route.
app.use("/api/v1/tasks", tasks);

// setting routes
app.get("/", (req, res) => {
  res.send("My Task Manager App");
});

// We don't want to listen to the user's request unless DB connection is established.
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening to Port ${PORT}`);
  });
});

/**
  /api/v1 -> is the convention to use such routes for APIs as we can have different routes
  other than API routes. Eg:-
 * APIs we need to build:-
 * 1. get all the tasks -> 'api/v1/tasks'.
 * 2. create a new task -> 'api/v1/tasks'
 * 3. get single task -> 'api/v1/tasks/:id'
 * 4. update a task -> 'api/v1/tasks/:id'
 * 5. delete a task -> 'api/v1/tasks/:id'
 */
