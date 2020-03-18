const express = require("express");
const path = require("path");
const moment = require("moment");
const members = require("./Member");

const app = express();

const PORT = process.env.PORT || 5000;
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl} : ${moment().format()}`);
  next();
};
app.use(logger);

//set staic folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/members", (req, res) => {
  res.json(members);
});

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));