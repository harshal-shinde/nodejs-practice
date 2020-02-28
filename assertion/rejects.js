const asserrt = require("assert");

(async() => {
  await asserrt.rejects(
    async() => {
      throw new TypeError("Wrong value");
    },
    {
      name: "TypeError",
      message: "Wrong value"
    }
  );
})();

//Promise
asserrt.rejects(
  Promise.reject(new Error("Wrong value")),
  Error
).then(() => {
  // ...
});