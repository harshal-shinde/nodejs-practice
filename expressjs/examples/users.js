var users = [
  {name : "Harshal", email : "harshaal.shinde@gmail.com"},
  {name : "Shinde", email : "shinde@gmail.com"}
];

exports.list = (req, res) => {
  res.render('users', {title: "users", users: users});
};


exports.load = (req, res, next) => {
  let userId = req.param.id;
  req.user = user[userId];
  if(req.user) {
    next();
  } else {
    let err = new Error("Can not find user" + userId);
    err.status = 404;
    next(err);
  }
};

exports.view = (req, res) => {
  res.render("users/view", {
    title : "viewing user"+ req.user.name,
    user: req.user
  });
};


exports.edit = () =>{
  res.render("user/edit", {
    title : "Editing user "+ req.user.name,
    user : req.user
  });
};


exports.update = () => {
  var user = req.body.user;
  req.user.name = user.name;
  req.user.email = user.email;
  res.redirect('back');
};