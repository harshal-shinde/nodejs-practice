const cluster = require("cluster");

cluster.on("exit", (worker, code, signal) => {
  if(worker.exitedAfterDisconnect === true) {
    console.log("ohh, itwas just voluntary- no need to worry");
  }
});

if(cluster.isMaster) {

  const worker = cluster.fork();
  let timeout;

  cluster.on("fork", (worker)=> {
    console.log("worker is dead", worker.isDead());
  });

  worker.on("listening", (address) => {
    worker.send("shutdown");
    worker.disconnect();
    timeout = setTimeout(() => {
      worker.kill();
    }, 2000);
  });

  worker.on("disconnect", ()=> {
    clearTimeout(timeout);
  });
} else if(cluster.isWorker) {
  const net = require("net");

  const  server = net.createServer((socket) => {
    console.log("Connection never ends");
  });

  process.on("message", (msg) => {
    if(msg == "shutdown") {
      console.log("initiate gracefulluy");
    }
  });
}