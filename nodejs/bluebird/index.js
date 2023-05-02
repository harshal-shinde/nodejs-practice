var fs = require("fs");
var Promise = require("bluebird")

//Fs is singleton instance thats why we use promisifyall 
//existing instance
Promise.promisifyAll(fs)

//Existing 
fs.readFile("./file.json", (err, val)=>{
  if(err) {
    console.error("Unable to readfile");
  }else {
    try {
      val = JSON.parse(val);
      console.log(val.success);
    }catch(end){
      console.error("Invalid json file")
    }
  }
});

//With bluebird promise
fs.readFileAsync("file.json").then(JSON.parse)
  .then((val)=> {
    console.log(val.success);
  })
.catch(SyntaxError, (err)=> {
  console.error("Invalid Json file");
})
.cath(()=>{
  console.error("Unable to read file")
});




