const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000; //will look for PORT environment var, if none defined, the default port is 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
