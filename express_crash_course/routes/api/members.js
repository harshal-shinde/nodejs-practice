const express = require("express");
const router = express.Router();
const members = require("../../Member");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res)=> {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg : "Member not found"});
  }
});

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    role: req.body.role,
    status : "active"
  };

  if(!newMember.name) {
    return res.status(400).json({msg : "Please enter proper name"});
  }

  if(!newMember.role) {
    return res.status(400).json({msg : "Please enter proper role"});
  }
  members.push(newMember);
  res.send(members);
});

module.exports = router;