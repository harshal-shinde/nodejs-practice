var express = require("express");
var verbose = process.env.NODE_ENV != "test";

var app = module.exports = express();

app.map = function (a, route) {

  route = route || '';
  for (var key in a) {
    switch (typeof a[key]) {
      case "object" :
        app.map(a[key], route +key);
        break;
      case "function" : 
        if(verbose) console.log("%s", "%s", key, route);
        app[key](route, a[key]);
    }
  }
};

var users = {
  list : (req, res) => {
    res.send("Send user list");
  },
  get : (req, res) => {
    res.send("user " + req.params.id);
  },
  delete : (req, res) => {
    res.send("delete users");
  }
};

app.map({
  "/users" : {
    get : users.list,
    delete :users.delete,
    "/:uid" : {
      get : users.get,
      "/pets": {
        get : pets.list,
        "/:pid": {
          delete : pets.delete
        }
      }
    }
  } 
});

if(!module.parent) {
  app.listen(3000);
  console.log("Express started on port");
}
