/**
 * message <string> | <Error> Default: 'Failed'
Throws an AssertionError with the provided error message or a default error message. 
If the message parameter is an instance of an Error then it will be thrown instead of the AssertionError.
 * 
 */

const assert = require('assert').strict;

assert.fail();
// AssertionError [ERR_ASSERTION]: Failed

assert.fail('boom');
// AssertionError [ERR_ASSERTION]: boom

assert.fail(new TypeError('need array'));
// TypeError: need array