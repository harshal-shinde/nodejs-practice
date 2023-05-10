const bodyParser = require('body-parser');
var express = require('express');
var http = require("http")

var app = express();
var http = require("http").createServer(app)
var io = require("socket.io")(http)

// var server = http.createServer(app);
// var io = require('socket.io')(server);

let messages = [
  {name: "Harshal", message : "First Name"},
  {name: "Shinde", message : "Last Name"},
]
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get('/messages', (req, res)=> {
  res.send(messages);
});

app.post('/messages', (req, res)=> {
  console.info(req.body);
  messages.push(req.body);
  io.emit('message', req.body);
  res.sendStatus(200);
})

io.on('connection', (socket)=>{
  console.log('a user connected')
})

var server = http.listen(3000, ()=> {
  console.log(`Server is listeneing on port ${server.address().port}`);
});