import express, { request, response } from "express";
import data from './data/mock.json' assert {type : "json"}

const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use('/images', express.static("images"));

app.get('/',(req, res)=>{
  res.json(data)
});

//GET with next
app.get('/next',(req, res, next)=>{
  console.info('The response will be sent by the next function');
  next();
},(request, response)=>{
  response.send('I just setup route with second callback')
});

//GET - Redirect method
app.get('/redirect',(req, res)=>{
  res.redirect('/')
});

app.get('/class/:id', (request, response)=>{
  console.log(request.params);
  const studentId = request.params.id;
  const student = data.filter((student)=> student.id == studentId);
  response.send(student)
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

app.route('/class')
.get((req, res)=>{
  res.send('Retrieve class information');
})
.post((req, res)=>{
  res.send('Create class information');
})
.put((req, res)=>{
  res.send('Update class information');
});

//Route chaining
// app.get('/class',(req, res)=>{
//   res.send('Retrieve class information');
// });

// app.post('/class',(req, res)=>{
//   res.send('Create class information');
// });

// app.put('/class',(req, res)=>{
//   res.send('Update class information');
// });


app.listen(PORT, ()=>{
  console.info(`Nodejs server up successfully on port ${PORT}`)
});