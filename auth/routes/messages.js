//import dependencies
const express =  require("express");

//import middlewares
const auth = require('../middleware/auth');
const {admin, editor, viewer} = require("../middleware/roles");

//Dummy Data
let messages = [{
  id:1, 
  name:'Lorem ipsum dolar',
  content:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Cras pretium nec ipsum nec elementum."
}];

//Setup the router for express
const router = express.Router();

router.get("/", [auth, viewer], (req,res)=>{
  res.send({
    ok:true,
    result: messages
  });
});

router.post("/", [auth, editor], async(req, res)=>{
//Write down update code
  res.status(200).send({
    ok:true,
    result:messages
  });
});

router.put("/", [auth, editor], async(req, res)=>{
  //Update code
  res.status(200).send({
    ok:true,
    result:messages
  });
});

router.delete("/",[auth, admin], async(req, res)=>{
  //Delete the message
  messages = messages.filter((message) => {
    message.id !== req.body.id
  });

  res.status(200).send({
    ok:true,
    result:messages
  });
});

//export the router
module.exports = router;