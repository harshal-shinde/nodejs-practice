const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
//set staic folder
app.use(express.static(path.join(__dirname, "public")));

//Members API
app.use("/api/members/", require("./routes/api/members"));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));