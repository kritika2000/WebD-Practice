const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://kritika2000:Kr.4253@node-express-projects.xiackxk.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      // passing a few options to prevent warnings from mongo DB.
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
};

/* With this set up, the server and the DB connection are not in sync as DB 
connection is required before we make API calls to the server.
*/
// connectDB();

module.exports = connectDB;
