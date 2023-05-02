import assert from 'node:assert/strict';

//assert.deepEqual(1, 1);

const { message } = new assert.AssertionError({
  actual:1,
  expected:2,
  operator:'strictEqual'
});

//Verify error output

try {
  assert.strictEqual(1,2);
} catch(error){
  console.log("I am catch block");
  // console.log(error);
  assert(error instanceof assert.AssertionError);
  assert.strictEqual(error.message, message);
  assert.strictEqual(error.name, 'AssertionError');
  assert.strictEqual(error.actual, 1);
  assert.strictEqual(error.expected, 2);
  assert.strictEqual(error.code, 'ERR_ASSERTION');
  assert.strictEqual(error.operator, 'strictEqual');
  assert.strictEqual(error.generatedMessage, true);
}