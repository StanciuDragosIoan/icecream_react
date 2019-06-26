const mongoose = require("mongoose");
const config = require("config");
//get the default.json value
const db = config.get("mongoURI");
//connect to mongo db
const connectDB = async () => {
  //try catch block so something happens if the connection fails ->typical for async/await use
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
