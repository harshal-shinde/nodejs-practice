//assert.deepStrictEqual(actual, expected[, message])

const assert =  require("assert");

// assert.deepStrictEqual({a:1}, {a : "1"});//Will throw error

const date = new Date();
const object = {};
const fakeDate = {};


Object.setPrototypeOf(fakeDate, Date.prototype);
// assert.deepStrictEqual(object, fakeDate);//Will throw error , diff prototype


// assert.deepStrictEqual(date, fakeDate);

assert.deepStrictEqual(NaN, NaN);

assert.deepStrictEqual(new Number(1), new Number(1));

assert.deepStrictEqual(new String('foo'), Object('foo'));

assert.deepStrictEqual(-0, -0);

const symbol1 = Symbol();
const symbol2 = Symbol();

//It will work
assert.deepStrictEqual({ [symbol1] : 1}, {[symbol1] : 1});

//It will give error
assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });

const weakMap1 = new WeakMap();