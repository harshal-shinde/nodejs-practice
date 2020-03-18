const express = require("../..");
const hash = require("pbkdf2-password")();
const path = require("path");
const session = require("express-session");

const app = module.exports = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended :false}));


app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "shhhh, very secret"
}));

app.use((req, res, next) => {
  let err = req.session.error;
  let msg = req.session.message;
  delete req.session.error;
  delete req.session.success;

  res.locals.message = "";
  if(err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if(msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

var users = {
  tj : {name :"tj"}
};

hash({password : "foobar"}, (err, pass, salt, hash) =>{
  if(err) throw err;
  users.tj.salt = salt;
  users.tj.hash = hash;
});

const authenticate = (name, pass, fn) => {
  if(!module.parent) console.log("authenticating %s %s", name, pass);
  let user = users[name];
  
};