const assert = require("assert").strict;

assert.doesNotMatch("I will fail", /fail/);

assert.doesNotMatch(123,/pass/);
//Error

assert.doesNotMatch("I will pass", /different/);
