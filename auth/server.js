//Import express dependency
const express = require("express");

//Setup express server
const app = express();
const port = 3000;

//import middleware into express
app.use(express.json({}));

//Import routes
const authRouter = require('./routes/auth');
const messageRouter = require('./routes/messages');

//Setup all the routes
app.use('/api/messages', messageRouter);
app.use('/api/auth', authRouter);

//Start the server
app.listen(port, ()=> {
  console.log(`Listening on port ${port}...`);
})


