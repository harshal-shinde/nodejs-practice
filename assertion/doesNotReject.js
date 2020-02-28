const assert = require("assert");
(async() => {
 await assert.doesNotReject(
  async () => {
    throw new TypeError("Wrong value");
  }, SyntaxError
 );
})();

assert.doesNotReject(Promise.reject(new TypeError("Wrong value")))
  .then(()=>{
    // ...
  });