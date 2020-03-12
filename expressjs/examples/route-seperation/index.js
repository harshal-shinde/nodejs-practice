var express = require("../..");
var app = express();
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var methodOverride = require("method-pverride");
var site = require("/site");
var post = require("./post");
var user = require("./user");

module.exports = app;

app.set("view engine", "jade");
app.set("views", __dirname + "/views");

if(!module.parent) {
  app.use(logger("dev"));
}

app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));


app.get("/", site.index);
app.get("/users", user.list);
app.all("/users/:id/:op?", user.view);
app.get('/user/:id/view', user.view);
app.get('/user/:id/edit', user.edit);
app.put('/user/:id/edit', user.update);
