import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

const numCpus = availableParallelism();

if(cluster.isPrimary) {
  console.log(`Primary ${process.id} is running`);

  //fork workers
  for(let i=0; i < numCpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal)=>{
    console.log(`worker ${worker.process.id} died`);
  });
}else {
  //Workers can share TCP connection
  //In this case it is an HTTP server

  http.createServer((req, res)=>{
    res.writeHead(200);
    res.end('hello world\n')
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
