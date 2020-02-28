//Tests shallow, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( == ).

const assert = require('assert');

assert.equal(1, 1);
//OK

assert.equal(1, '1');
//OK

assert.equal(1, 2);
// AssertionError: 1 == 2

assert.equal({ a: { b: 1 } }, { a: { b: 1 } });
// AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
