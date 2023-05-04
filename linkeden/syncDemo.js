fs = require('fs')

function test(err, data) {
  console.log(data);
}

data = fs.readdir('/Users/admin', test)

console.log('This come after...');