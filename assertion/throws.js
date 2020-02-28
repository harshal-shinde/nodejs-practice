const assert = require("assert");

const err = new TypeError("Wrong value");

err.code = 404;
err.foo ="foo";
err.info = {
  nested: true,
  baz: "text"
};

err.reg = /abc/i;

assert.throws(
  () => {
    throw err;
  },
  {
    name: "typeError",
    message: "Wrong value",
    info: {
      nested : true,
      baz: "text"
    }
  }
);

assert.throws(
  () => {
    throw err;
  },
  {
    name:/^TypeError$/,
    message: /Wrong/,
    foo: "bar",
    info: {
      nested: true,
      baz: "text"
    }
  }
);