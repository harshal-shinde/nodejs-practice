//import dependencies 
const jwt  = require('jsonwebtoken');
const express = require("express");
const bcrypt = require('bcrypt');

//Setup the express router
const router = express.Router();

//On post
router.post('/', async(req, res)=> {
  //Dummy data
  const users = [{
    email :"harshalsharadshinde@gmail.com",
    password :"$2b$15$zqY2Q4eOoGzFpZkHJz9HS.BSfXc/HM2E/yTWa1awFmTMgN2bE72Uu",
    roles : ['admin', 'editor', 'viewer']
  }];

  //Get the user from the database if user is not there return error
  let user = users.find(u=> u.email === req.body.email);
  if(!user) throw new Error("Invalid email or password");

  //Compare the password with the password in the database
  const valid = await bcrypt.compare(
    req.body.password, user.password
  )

  if(!valid) throw new Error("Invalid email or password");

  const token = jwt.sign({
    id: user._id,
    roles: user.roles,
  }, "jwtPraivetKey", {expiresIn:'15m'});

  res.send({
    ok:true,
    token:token
  });
});

module.exports =router;