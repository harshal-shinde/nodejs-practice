const assert = require("assert");

//assert.deepEqual(actual, expected[, message])

const object1 = {
  a: {
    b:1
  }
};

const object2 = {
  a: {
    b:2
  }
};

const object3 = {
  a: {
    b:1
  }
};

const object4 = Object.create(object1);

assert.deepEqual(object1, object1);

assert.deepEqual(object1, object2);

assert.deepEqual(object1, object3);

assert.deepEqual(object1, object4);