import express from "express";
import data from './data/mock.json' assert {type : "json"}

const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use('/images', express.static("images"));

app.get('/',(req, res)=>{
  res.json(data)
})

app.post('/create',(req, res)=>{
  res.send('This is post request at /create')
});

app.put('/update',(req, res)=>{
  res.send('This is get request at /update')
});

app.delete('/delete',(req, res)=>{
  res.send('This is get request at /delete')
});

app.listen(PORT, ()=>{
  console.info(`Nodejs server up successfully on port ${PORT}`)
  console.log(data);
});