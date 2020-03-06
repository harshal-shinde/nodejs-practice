const cluster = require("cluster");

const http = require("http");

if(cluster.isMaster) {
  let numReqs = 0;
  setInterval(() => {
    console.log(`numReqs = ${numReqs}`);
  }, 1000);

  const numCPUSs = require("os").cpus.length;
  for (let index =0; index < numCPUSs; index ++) {
    cluster.fork();
  }
  for(const id in cluster.workers) {
    cluster.workers[id].on("message", messageHandler);
  }
 
} else {

  http.Server((req, res)=> {
    res.writeHead(200);
    res.end("Hello world\n");
    process.send({
      cmd : "notifyRequest"
    });
  }).listen(8000);
}


 //count requests
function messageHandler(msg) {
  if(msg.cmd && msg.cmd === "notifyRequest"){
    numReqs += 1;
  }
}

