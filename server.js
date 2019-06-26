const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//init middlewear (body parser -for payload body- is now included with express)
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//define routes
app.use("/api/icecream", require("./routes/api/icecream"));

const PORT = process.env.PORT || 5000; //will look for PORT environment var, if none defined, the default port is 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
