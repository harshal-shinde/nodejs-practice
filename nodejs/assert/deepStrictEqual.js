import assert from 'node:assert/strict';

//assert.deepStrictEqual({a:'1'}, {a:'1'})

const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate, Date.prototype);

//Different [[Prototype]]:
assert.deepStrictEqual(object, fakeDate);

//Different type tags
assert.deepStrictEqual(date, fakeDate);

assert.deepStrictEqual(NaN, NaN, "NAN");